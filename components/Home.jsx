
import React from 'react'
import Link from 'next/link'
const Home = () => {
  return (
    <div>
        <Link href='apicall/' >
             <h1 style={{cursor:'pointer'}} >Go Apicall route</h1>
        </Link>
    </div>
  )
}

export default Home