import React from 'react'
import ProductCard from './ProductCard'

export default function ProductsList({products}) {
  return (
    <>
       {
        products?.map(item=>(
            <ProductCard item={item}/>
        ))
       }
    </>
  )
}
