import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter backgroundColor='light' className='text-center text-lg-left mt-5'>
      <MDBContainer className='p-4'>
        <p className='text-center'>
          © {new Date().getFullYear()} Sportspots · Santo André
        </p>
      </MDBContainer>
    </MDBFooter>
  );
};

export default Footer;
