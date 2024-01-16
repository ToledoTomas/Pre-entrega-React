import { Link } from "react-router-dom"

const Item = ({id, name, img, price, stock}) => {
    return ( 
        <article className="inline-block">
            <header>
                <h2 className="ml-10">{name}</h2>
            </header>
            <picture>
                <img className="w-24 ml-6" src={img} alt="Imagen de producto" />
            </picture> 
            <section>
                <p>
                    Precio: ${price}
                </p>
                <p>
                    Stock: {stock}
                </p>
            </section>
            <footer>
                <Link to= {`/detail/${id}`}>Ver detalle</Link>     
            </footer>
        </article>
    )
}

export default Item