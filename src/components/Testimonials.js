import React from 'react'
import Card from './Card'

const Testimonials = (props) => {
  return (
    <div>
        <Card reviews = {props.reviews}></Card>
    </div>
  )
}

export default Testimonials 

