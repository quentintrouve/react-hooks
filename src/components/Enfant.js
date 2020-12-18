import React from 'react'

const Enfant = function ({ chaine, myFunc }) {

  console.log("Mise à jour du composant enfant")

  return (
    <div>
      <h2>Composant enfant</h2>
      <p>{chaine}</p>
      <button onClick={myFunc}>Click moi</button>
    </div>
  )
}

export default React.memo(Enfant);
