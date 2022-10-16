import React from 'react'

const Card = ({children , orange}) => {
  return (
    <div className={`card d${ orange && 'orange'}`}>
        {children}
    </div>
  )
}

export default Card