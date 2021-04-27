import React, {useEffect,useState} from 'react';
import data from "../data";
import {Button, Card, Col, Row, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import "react-toggle/style.css"

const Shop = () => {
    const dispatch = useDispatch()
    const [isFavorite,setIsFavorite] = useState(true)
    const {catalog, rates, based} = useSelector((s) => s)
    const currency = {
        USD: "USD",
        EUR: "EUR",
        RUB: "RUB"
    }
    useEffect(() => {
        dispatch({type: "SET_CATALOG", catalog: data})
    }, [])
    return (
        <div>
            <Row className="mb-3">
                <Col md={4}>
                    <div className="d-flex">
                        <Form.Control as="select" className="mr-3"
                                      onChange={(e) =>
                                          dispatch({type: "SORT_CATALOG", payload: e.target.value})}>
                            <option value="" disabled selected>sort by</option>
                            <option value="a-z">A_Z</option>
                            <option value="z-a">Z_A</option>
                            <option value="lowest">To lowest</option>
                            <option value="highest">To highest</option>
                        </Form.Control>
                        <Form.Control as="select"
                                      onChange={(e) =>
                                          dispatch({type: "GET_BASED", payload: e.target.value})}>
                            <option value="RUB">RUB</option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>

                        </Form.Control>
                    </div>

                </Col>
            </Row>
            <Row>
                {
                    catalog.map(product =>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={product.image} className="product__img"/>
                                <Card.Body>
                                    <Card.Title className="product__title">{product.title}</Card.Title>
                                    <Card.Text>Price {(product.price * rates[based]).toFixed(1)}{currency[based]}</Card.Text>

                                        <div>
                                            <i className={`${product.rate > 0 ? "fas fa-star" : ""}`}></i>
                                            <i className={`${product.rate > 1 ? "fas fa-star" : ""}`}></i>
                                            <i className={`${product.rate > 2 ? "fas fa-star" : ""}`}></i>
                                            <i className={`${product.rate > 3 ? "fas fa-star" : ""}`}></i>
                                            <i className={`${product.rate > 4 ? "fas fa-star" : ""}`}></i>
                                        </div>
                                    <div style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        marginTop: "15px"
                                    }}>
                                        <Button variant="secondary"
                                                onClick={() => dispatch({type: "ADD_TO_CART", product})}
                                        >Add to cart</Button>
                                        <i className="fas fa-heart"
                                           onClick={() => dispatch({type: "ADD_TO_FAVORITE", product})}>
                                        </i>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </div>
    );
};

export default Shop;