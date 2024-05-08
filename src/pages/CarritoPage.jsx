import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"

export const CarritoPage = () => {

  const {
    listaCompras,
    aumentarCantidad,
    disminuirCantidad,
    eliminarCompra
  } = useContext(CarritoContext)

  const calcularTotal = () => {
    return listaCompras.reduce((acc, currentValue) => acc + currentValue.price * currentValue.cantidad, 0).toFixed(2)
  }

  const handleImpresion = () => {
    print()
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            listaCompras.length === 0
              ? <tr>
                <td colSpan={4}>No hay productos por mostrar</td>
              </tr>
              : listaCompras.map(compra => (
                <tr key={compra.id}>
                  <td>{compra.title}</td>
                  <td>{compra.price}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-light me-2"
                      onClick={() => disminuirCantidad(compra.id)}
                    >
                      -
                    </button>
                    {compra.cantidad}
                    <button
                      type="button"
                      className="btn btn-light ms-2"
                      onClick={() => aumentarCantidad(compra.id)}
                    >
                      +
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => eliminarCompra(compra.id)}>
                      Eliminar Compra
                    </button>
                  </td>
                </tr>
              ))
          }
          <tr>
            <th><b>Total</b></th>
            <td>${calcularTotal()}</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>

      {
        listaCompras.length > 0
        && <div className="d-grid gap-2">
          <button className="btn btn-primary"
            onClick={handleImpresion}
          >
            COMPRAR
          </button>
        </div>
      }
    </>
  )
}
