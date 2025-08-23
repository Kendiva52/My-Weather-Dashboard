import React from 'react';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import FooterPage from './components/FooterPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar at top */}
      <Navbar />

      {/* Main content (Homepage handles search, error, weather card) */}
      <main className="flex-grow bg-gray-100">
        <Homepage />
      </main>

      {/* Footer pinned at bottom */}
      <FooterPage />
    </div>
  );
}

export default App;

