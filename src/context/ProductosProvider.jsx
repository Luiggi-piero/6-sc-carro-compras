import { useEffect, useState } from "react"
import { ProductosContext } from "./ProductosContext"

// eslint-disable-next-line react/prop-types
export const ProductosProvider = ({ children }) => {

    const [productos, setProductos] = useState([])

    const fetchProductos = async () => {

        try {
            const response = await fetch(`https://fakestoreapi.com/products`)

            if (!response.ok) throw new Error('Error en la api')

            const data = await response.json()
            setProductos(data)
        } catch (error) {
            console.log('Error', error);
        }
    }

    useEffect(() => {
        fetchProductos()
    }, [])

    return (
        <ProductosContext.Provider value={{ productos }}>
            {children}
        </ProductosContext.Provider>
    )
}
