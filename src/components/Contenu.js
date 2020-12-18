import React, { useState } from 'react'
import Enfant from './Enfant'

export default function Contenu() {

  const [compteur, setCompteur] = useState(0)

  return (
    <div>
      <h1>Composant parent</h1>
      <p>{compteur}</p>
      <button onClick={() => setCompteur(compteur + 1)}>Click moi</button>
      <Enfant chaine="Props du composant enfant"></Enfant>
    </div>
  )
}
