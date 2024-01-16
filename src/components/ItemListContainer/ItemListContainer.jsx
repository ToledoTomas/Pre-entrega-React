import classes from './ItemListContainer.module.css'
import { useState, useEffect } from 'react'
import { getProductsByCategory, getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({props}) => {
   const [products, setProducts] = useState([]);

   const {categoryId} = useParams ()

        useEffect (()=>{

            const asyncFunction =  categoryId ? getProductsByCategory : getProducts

            asyncFunction(categoryId)
            .then (products => {
                setProducts(products)
            })
            .catch(error => {
                console.log(error)
            })
        },[categoryId])
   
    return (
        <div>
            <h1>{props}</h1>
            <ItemList products = {products}/>
        </div>
    )
}
export default ItemListContainer