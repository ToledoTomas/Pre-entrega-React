import { useState, useEffect } from "react"

const MercadoLibre = () => {

    const[products, setProducts] = useState ([])
    const [input,setInput] = useState ([])

    useEffect(()=>{
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=libros')
        .then(response => {
           return response.json()
        })
        .then(json => setProducts(json.results.slice(0,10)))
    },[])

    const search = (e) => {
        e.preventDefault()

        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
        .then(response => {
           return response.json()
        })
        .then(json => setProducts(json.results.slice(0,10)))
    }
    

    return (
        <>
        <h1>Mercado Libre</h1>
        <form onSubmit={search}>
            <input  className="ml-5" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button  className="ml-3 ">Search</button>
        </form>
        <div>
            {
                products.map(prod => {
                    return (
                        <div className='m-5 inline-grid grid-rows-3 justify-items-center' key={prod.id}>
                            <h1 className="w-44 mb-8">{prod.title}</h1>
                            <img className='w-36' src={prod.thumbnail}/>
                            <h3 className="mt-5">$ {prod.price}</h3>
                        </div>
                    )
                })
            } 
        </div>
        </>
    )
}

export default MercadoLibre