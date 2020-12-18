import React, { useState, useEffect } from 'react'
import useCatImg from '../hooks/useCatImg'

export default function Compo() {

  const catUrl = useCatImg();

  return (
    <div>
      <img src={catUrl} />
    </div>
  )
}
