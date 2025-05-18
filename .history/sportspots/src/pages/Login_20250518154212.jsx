import React, { useState } from 'react';
import { MDBContainer, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdb-react-ui-kit';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth, db } from '../firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigate('/buscar');
    } catch (error) {
      setErro('Email ou senha inválidos.');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      await setDoc(doc(db, 'usuarios', user.email), {
        email: user.email,
        nome: user.displayName,
        foto: user.photoURL,
        ultimoLogin: new Date(),
      }, { merge: true });
      navigate('/buscar');
    } catch (error) {
      setErro('Erro ao entrar com o Google.');
    }
  };

  return (
    <MDBContainer className="py-5 d-flex justify-content-center">
      <MDBCard style={{ maxWidth: '500px', width: '100%' }}>
        <MDBCardBody>
          <h3 className="text-center mb-4">Entrar no Sportspots</h3>

          <MDBInput className="mb-3" label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <MDBInput className="mb-3" label="Senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />

          {erro && <p className="text-danger">{erro}</p>}

          <MDBBtn color="success" block className="mb-2" onClick={handleLogin}>Entrar</MDBBtn>

          <MDBBtn color="light" block onClick={handleGoogleLogin}>
            <MDBIcon fab icon="google" className="me-2" />
            Entrar com Google
          </MDBBtn>

          <p className="mt-3 text-center">Não tem conta? <a href="/signup">Cadastre-se</a></p>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default Login;
