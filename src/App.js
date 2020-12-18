import { useState } from 'react'
// import Compo from './components/Compo'
import Contenu from './components/Contenu'
import Modal from './components/Modal/Modal'

function App() {

  const [toggleShow, setToggleShow] = useState(false);

  const closeModal = () => {
    setToggleShow(false)
  }
  const openModal = () => {
    setToggleShow(true)
  }

  let myModal = '';

  if (toggleShow) {
    myModal = <Modal close={closeModal} />
  } else {
    myModal = '';
  }

  return (
    <div className="App">
      {/* <Compo /> */}
      <Contenu />
      <button onClick={openModal}>Open modal</button>
      {myModal}
    </div>
  );
}

export default App;
