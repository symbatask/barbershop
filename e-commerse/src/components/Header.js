import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {useSelector} from "react-redux";


const Header = () => {
    const {cart} = useSelector(store => store)
    const totalCountInCart = cart.reduce((acc, rec) => {
        return acc + rec.quantity
    }, 0)
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/" exact>Navbar</Navbar.Brand>
            <Nav className="ml-auto">
                <LinkContainer to="/">
                    <Nav.Link>Главное</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/cart" exact>
                    <Nav.Link>Корзина ({totalCountInCart})</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/favorites" exact>
                    <Nav.Link>Фавориты</Nav.Link>
                </LinkContainer>

            </Nav>
        </Navbar>
    );
};

export default Header;