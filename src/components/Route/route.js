import React from 'react';
import Menu from '../Menu/menu';
import Footer from '../Footer/footer';

function Route({ children }) {
  return (
    <>
      <Menu />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Route;
