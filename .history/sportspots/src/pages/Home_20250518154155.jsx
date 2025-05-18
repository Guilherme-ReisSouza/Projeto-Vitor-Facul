import React from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import ModalitiesGrid from '../components/ModalitiesGrid';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="text-center mt-5">
        <img 
          src="https://picsum.photos/1200/300?grayscale" 
          alt="banner" 
          style={{ width: '100%', objectFit: 'cover' }} 
        />

        <div className="p-4">
          <h2 className="fw-bold">Encontre seu espaço. Movimente sua vida.</h2>
          <p className="lead mt-3">
            Aulas gratuitas em espaços públicos de Santo André para todos os estilos e idades.
            Descubra o poder da comunidade em movimento. A cidade se mexe – e você também!
          </p>
        </div>

        <SearchBar />
        <ModalitiesGrid />
      </div>
      <Footer />
    </>
  );
};

export default Home;
