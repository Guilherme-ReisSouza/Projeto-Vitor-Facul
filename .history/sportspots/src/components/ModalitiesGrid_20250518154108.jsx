import React from 'react';
import { MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';

const modalidades = [
  { id: 1, img: 'https://picsum.photos/200/100?1', nome: 'Funcional' },
  { id: 2, img: 'https://picsum.photos/200/100?2', nome: 'Dança' },
  { id: 3, img: 'https://picsum.photos/200/100?3', nome: 'Capoeira' },
  { id: 4, img: 'https://picsum.photos/200/100?4', nome: 'Natação' },
  { id: 5, img: 'https://picsum.photos/200/100?5', nome: 'Corrida' }
];

const ModalitiesGrid = () => {
  return (
    <>
      <MDBRow className="m-3">
        {modalidades.map((item) => (
          <MDBCol md="4" sm="6" xs="12" className="mb-3" key={item.id}>
            <img 
              src={item.img} 
              alt={item.nome} 
              style={{ width: '100%', borderRadius: '10px', border: '1px solid #ccc' }} 
            />
          </MDBCol>
        ))}
      </MDBRow>
      <div className="text-center pb-5">
        <MDBBtn style={{ backgroundColor: '#333', borderRadius: '30px' }}>Ver todas</MDBBtn>
      </div>
    </>
  );
};

export default ModalitiesGrid;
