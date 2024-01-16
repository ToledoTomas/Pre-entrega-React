const products = [
    {
        id:'1',
        name: 'IT',
        price: 1000,
        category: 'Terror',
        img: 'https://images.cdn1.buscalibre.com/fit-in/360x360/5a/fd/5afd1629dab91b7960cc2e2437ef6efe.jpg',
        stock: 20,
        description: 'Descripción de IT'
    },
    {
        id:'2',
        name: 'Harry Potter',
        price: 2000,
        category: 'Fantasía',
        img: 'https://images.cdn1.buscalibre.com/fit-in/360x360/c5/c8/c5c886315842ad2d8d7295763b06a4ce.jpg',
        stock: 15,
        description: 'Descripción de Harry Potter'
    },
    {
        id:'3',
        name: 'Clean Code',
        price: 3000,
        category: 'Programación',
        img: 'https://images.cdn3.buscalibre.com/fit-in/360x360/10/fb/10fb170d7732b7dca25ebb81ded2572d.jpg',
        stock: 10,
        description: 'Descripción de Clean Code'
    }
]

export const getProducts = () => {
    return new Promise ((resolve)=>{
        setTimeout(()=> {
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve)=>{
        setTimeout(()=> {
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(products.find(prod => prod.category === productCategory))
        },500)
    })
}