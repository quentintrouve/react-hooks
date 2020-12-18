import React, { useState, useEffect } from 'react'

export default function useCatImg() {

  const [catImg, setCatImg] = useState('')

  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch('https://api.thecatapi.com/v1/images/search')
      const data = await response.json()
      setCatImg(data[0].url)
    }

    fetchData()
  }, [])

  return catImg;
}
