import React, { useState } from 'react';
import { MDBContainer, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebaseConfig';
import { setDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      await setDoc(doc(db, 'usuarios', email), {
        email: email,
        criadoEm: new Date(),
      });
      navigate('/buscar');
    } catch (error) {
      setErro('Erro ao criar conta. Verifique os dados.');
    }
  };

  return (
    <MDBContainer className="py-5 d-flex justify-content-center">
      <MDBCard style={{ maxWidth: '500px', width: '100%' }}>
        <MDBCardBody>
          <h3 className="text-center mb-4">Criar Conta</h3>

          <MDBInput className="mb-3" label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <MDBInput className="mb-3" label="Senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />

          {erro && <p className="text-danger">{erro}</p>}

          <MDBBtn color="success" block onClick={handleSignup}>Cadastrar</MDBBtn>

          <p className="mt-3 text-center">
            Já tem conta? <a href="/login">Entre aqui</a>
          </p>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default Signup;
