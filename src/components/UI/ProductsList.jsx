import React from 'react'
import ProductCard from './ProductCard'

export default function ProductsList({products}) {
  return (
    <>
       {
        products?.map((item, index)=>(
            <ProductCard item={item} key={index}/>
        ))
       }
    </>
  )
}
