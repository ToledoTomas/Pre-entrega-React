import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, name, price, category, img, stock, description }) => {

    return (
        <article className='m-auto mb-4 flex flex-col items-center border-solid border-blue-400 border-2 w-72'>
            <header>
                <h2 className='mb-3 font-bold' >
                    {name}
                </h2>
            </header>
            <picture>
                <img className='w-36 mb-2' src={img} alt={name} />
            </picture>
            <section className='flex flex-col items-center'>
                <p>
                    Categoría: {category}
                </p>
                <p>
                    Descripción: {description}
                </p>
                <p>
                    Precio: ${price}
                </p>
            </section>
            <footer>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada:', quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail 