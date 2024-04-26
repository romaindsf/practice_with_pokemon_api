import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Pokemon() {
  const { name } = useParams()

  useEffect(() => {
    console.log(name)
  })
  return <h1>{name}</h1>
}
