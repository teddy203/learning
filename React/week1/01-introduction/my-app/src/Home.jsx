import React from 'react';
//import NavBar from './NavBar';
import Footer from './Footer';
import Categories from './Categories';

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Welcome to Gold's Gym</h1>
          <Categories />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;