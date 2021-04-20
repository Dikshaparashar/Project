import React from 'react';
import './App.css';
import BookComponent from './components/BookComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './margins/Header';
import Footer from './margins/Footer'
import book from './images/book.jpeg';

function App() {
  return (
    <div className="App">
      <Header/>
      <BookComponent/>
      <Footer/>
    </div>
  );
}

export default App;
