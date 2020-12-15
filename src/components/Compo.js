import React, { useState, useEffect } from 'react'

export default function Compo() {
  const [myState, setMyState] = useState('Hello')

  const sayGoodBye = () => {
    setMyState('Good Bye !')
  }

  useEffect(() => {

    console.log('Composant monté/affiché')

  }, [myState])

  return (
    <div>
      <button onClick={sayGoodBye}>Click</button>
      <p>{myState}</p>
    </div>
  )
}
