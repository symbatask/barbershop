import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Card} from "react-bootstrap";


const Favorites = () => {
    const {favorite, rates, based} = useSelector((s) => s)
    return (
        <div className="d-flex">
            {
                favorite.map(product =>
                <Card style={{ width: '18rem', marginRight: "30px" }}>
                <Card.Img variant="top" src={product.image} style={{height: "300px",objectFit:"contain"}}/>
                <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
            {(product.price * rates[based]).toFixed(1)}{rates[based]}
                </Card.Text>
                </Card.Body>
                </Card>
                )
            }
        </div>
    );
}
;

export default Favorites;