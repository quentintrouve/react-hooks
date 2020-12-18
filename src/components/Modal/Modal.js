import React from 'react'
import './Modal.css'

export default function Modal({ close, stopPropa }) {

  return (
    <div onClick={close} className="overlay">
      <div onClick={stopPropa} className="content">
        My content
        <button onClick={close} className="closeModal">Fermer</button>
      </div>
    </div>
  )
}
