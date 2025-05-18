import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BuscarAulas = () => {
  return (
    <>
      <Navbar />
      <MDBContainer className="py-5">
        <h2 className="text-center mb-4 fw-bold">Encontre uma aula perto de você</h2>
        <p className="text-center lead">Filtre por bairro, horário ou modalidade e venha se movimentar ao ar livre.</p>

        <MDBRow className="mb-4">
          <MDBCol md="4">
            <MDBInput label='Modalidade (ex: Yoga, Dança)' />
          </MDBCol>
          <MDBCol md="4">
            <MDBInput label='Bairro' />
          </MDBCol>
          <MDBCol md="4">
            <MDBInput label='Dia da semana ou horário' />
          </MDBCol>
        </MDBRow>

        <div className="text-center mb-4">
          <MDBBtn color="success" rounded>Buscar Aulas</MDBBtn>
        </div>

        <MDBRow>
          {[1, 2, 3].map((id) => (
            <MDBCol md="4" key={id} className="mb-4">
              <MDBCard>
                <img src={`https://picsum.photos/seed/${id}/300/200`} alt="aula" className="img-fluid" />
                <MDBCardBody>
                  <MDBCardTitle>Funcional no Parque Central</MDBCardTitle>
                  <MDBCardText>
                    Toda terça e quinta, às 7h da manhã. Aula ao ar livre, gratuita e com professores certificados.
                  </MDBCardText>
                  <MDBBtn size="sm" color="dark">Ver detalhes</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
      <Footer />
    </>
  );
};

export default BuscarAulas;
