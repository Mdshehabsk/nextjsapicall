/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Link from 'next/link'
import ApiHeaders from '../../components/ApiHeaders'
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return {
        props: {
            data:data
        }
    }
}


const Api = ({data}) => {
  return (
    <ApiHeaders>
        {
            data.map(todo => (
                <div key={todo.id} style={{display:'flex', justifyContent:"center"}} >
                    <Link href={`apicall/${todo.id}`}>
                        <h3>{todo.name}</h3>
                    </Link>
                </div>
            ))
        }
    </ApiHeaders>
  )
}


export default Api;
