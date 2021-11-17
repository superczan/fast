import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function AppLayout({ children }) {
  return (
    <>
      <header>
        <Header />
      </header>
      <section
        style={{
          paddingBottom: '80px',
        }}
      >
        {children}
      </section>
      <footer
        style={{
          position: 'fixed',
          left: 0,
          bottom: 0,
          width: '100%',
          maxHeight: '80px',
        }}
      >
        <Footer />
      </footer>
    </>
  );
}
