import React from 'react';
import {Button, Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

const Cart = () => {
    const dispatch = useDispatch()
    const {rates, based, cart} = useSelector((s) => s)
    const currency = {
        USD: "USD",
        EUR: "EUR",
        RUB: "RUB"
    }
    const totalPrice = cart.reduce((acc, rec) => {
        return acc + rec.quantity * rec.price * rates[based]
    }, 0)
    return (
        <div>
            {
                cart.length === 0 ?
                    <h6>
                        Ваша корзина пуста
                    </h6> :
                    <div>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>изображение</th>
                                <th>Название</th>
                                <th>Количество</th>
                                <th>Цена</th>
                                <th>Всего</th>
                                <th>Удалить</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                cart.map(product =>
                                    <tr>
                                        <td><img src={product.image} alt="" width="47"/></td>
                                        <td>{product.title}</td>
                                        <td>
                                            <Button variant="secondary"
                                                    onClick={() => dispatch({type: "REMOVE_FROM_CART", id: product.id})}
                                            > - </Button>
                                            <span className="px-3">  {product.quantity}</span>
                                            <Button variant="secondary"
                                                    onClick={() => dispatch({type: "ADD_TO_CART", product})}
                                            > + </Button>
                                        </td>
                                        <td>{(product.price * rates[based]).toFixed(1)}{currency[based]}</td>
                                        <td>{(product.price * product.quantity * rates[based]).toFixed(1)}{currency[based]}</td>
                                        <td>
                                            <Button variant="danger"
                                                    onClick={() => dispatch({type: "DELETE_ITEM", id: product.id})}>
                                                Delete
                                            </Button>
                                        </td>

                                    </tr>
                                )
                            }
                            </tbody>
                        </Table>

                        <div className="text-right">
                            <h6>Total: {totalPrice.toFixed(1)}{currency[based]}</h6>
                        </div>
                    </div>
            }
        </div>


    );
};

export default Cart;