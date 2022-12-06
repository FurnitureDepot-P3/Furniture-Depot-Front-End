import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import React from 'react';


function App() {
  
  return (
    <div className="App">
      
      <div className="App-header">
        <Header />
      </div>

      <div className="App-main">
        <Main />
      </div>

      <div className="App-footer">
        <Footer />
      </div>

    </div>
  );
}

export default App;
