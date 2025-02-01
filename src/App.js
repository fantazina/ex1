import './App.css';
import React from "react";
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Sidebar from "./components/Sidebar";

function App() {
  return (
      <div>
          <Header />
          <Content />
          <Sidebar />
          <Footer />
      </div>
  );
}

export default App;
