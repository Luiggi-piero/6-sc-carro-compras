import { Badge } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export const NavBar = () => {

    const { listaCompras } = useContext(CarritoContext)

    const cantidadTotal = () => {
        return listaCompras.reduce((acc, currentValue) => acc + currentValue.cantidad, 0)
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to='/' className="navbar-brand">Carrito</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link active" aria-current="page" href="#">Principal</NavLink>
                        </li>
                    </ul>
                    <NavLink to='/carrito'>
                        <IconButton aria-label="cart">
                            <Badge badgeContent={cantidadTotal()} color="primary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}
