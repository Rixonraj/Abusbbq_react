import React from 'react'
import { useParams } from 'react-router-dom'

function Order() {
    const params = useParams()
  return (
    <div>Order {params.orderid}</div>
  )
}

export default Order