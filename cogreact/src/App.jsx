// paste into src/App.jsx
import React from 'react';
import Header from './components/Header';

export default function App() {
  return (
    <div className='App'>
      <Header />
      <div className='container-box min-vh-100' id="home">
        <div className='content'>
          <h1 className="h1">Hello, CogReact!</h1>
        </div>
      </div>
    </div>
  );
}