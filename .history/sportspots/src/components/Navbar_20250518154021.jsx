import React from 'react';
import { MDBNavbar, MDBContainer, MDBNavbarBrand, MDBNavbarToggler, MDBIcon } from 'mdb-react-ui-kit';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const [user] = useAuthState(auth);

  const logout = () => signOut(auth);

  return (
    <MDBNavbar expand="lg" dark style={{ backgroundColor: '#03624C' }}>
      <MDBContainer fluid>
        <MDBNavbarBrand href="/">
          <u><b>SPORTSPOTS</b></u>
        </MDBNavbarBrand>

        <MDBNavbarToggler aria-label='Toggle navigation'>
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        {user ? (
          <div className="d-flex align-items-center gap-3">
            {user.photoURL && (
              <img src={user.photoURL} alt="avatar" style={{ width: '35px', borderRadius: '50%' }} />
            )}
            <span className="text-white">{user.displayName || user.email}</span>
            <MDBIcon icon="sign-out-alt" onClick={logout} className="text-white" style={{ cursor: 'pointer' }} />
          </div>
        ) : (
          <a href="/login" className="text-white ms-auto">Entrar</a>
        )}
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Navbar;
