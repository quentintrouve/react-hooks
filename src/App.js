import { useState, useEffect } from 'react'
// import Compo from './components/Compo'
import Contenu from './components/Contenu'
import Modal from './components/Modal/Modal'
import Navbar from './components/Navbar/Navbar'
import Compteur from './components/Compteur/Compteur'

import './App.css'

function App() {

  const [toggleShow, setToggleShow] = useState(false);
  const [pos, setPos] = useState([0, 0]);

  const closeModal = () => {
    setToggleShow(false)
  }
  const openModal = () => {
    setToggleShow(true)
  }
  const stopPropa = (e) => {
    e.stopPropagation();
  }

  let myModal = '';

  if (toggleShow) {
    myModal = <Modal close={closeModal} stopPropa={stopPropa} />
  } else {
    myModal = '';
  }

  const logMousePosition = e => {
    let arrayPos = [];
    arrayPos[0] = e.clientX;
    arrayPos[1] = e.clientY;
    setPos(arrayPos);
  }

  useEffect(() => {
    window.addEventListener('mousemove', logMousePosition);
    return () => {
      window.removeEventListener('mousemove', logMousePosition);
    }
  }, [])

  return (
    <div className="app">
      {/* <Compo /> */}
      <Navbar />
      <Contenu />
      <button className="buttonModal" onClick={openModal}>Open modal</button>
      {myModal}
      <span>X: {pos[0]}</span><span>Y: {pos[1]}</span>
      <Compteur />
    </div>
  );
}

export default App;
