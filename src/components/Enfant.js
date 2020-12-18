import React from 'react'

const Enfant = function ({ chaine }) {

  console.log("Mise à jour du composant")

  return (
    <div>
      <h2>Composant enfant</h2>
      <p>{chaine}</p>
    </div>
  )
}

export default React.memo(Enfant);
