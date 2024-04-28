import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../component/Header'

export default function Pokemon() {
  const { name } = useParams()

  useEffect(() => {
    console.log(name)
  })
  return (
    <>
      <Header />
      <h1>{name}</h1>
    </>
  )
}
