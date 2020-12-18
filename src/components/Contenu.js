import React, { useState, useMemo, useCallback } from 'react'
import Enfant from './Enfant'

export default function Contenu() {

  const [compteur, setCompteur] = useState(0)

  const array = useMemo(() => {
    return [1, 2, 3, 4, 5];
  }, [])

  const foo = useCallback(() => {
    console.log('foo')
  }, [])

  return (
    <div>
      <h1>Composant parent</h1>
      <p>{compteur}</p>
      <button onClick={() => setCompteur(compteur + 1)}>Click moi</button>
      <Enfant chaine={array} myFunc={foo}></Enfant>
    </div>
  )
}
