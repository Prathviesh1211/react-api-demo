import React from 'react'

const Card = ({title,id,body}) => {
  return (
    <div>
        <h1><span>{id}.</span>{title}</h1>
        <p>{body}</p>
    </div>
  )
}

export default Card
