import React from 'react'

const Enfant = function (props) {

  console.log("Mise à jour du composant enfant")

  return (
    <div>
      <h2>Composant enfant</h2>
      <p>{props.chaine}</p>
      <button onClick={props.myFunc}>Click moi</button>
    </div>
  )
}

export default React.memo(Enfant);
