import React, { useEffect, useState } from 'react';
import { FiPlus } from "react-icons/fi";
import { FaMinus } from "react-icons/fa6";
import { AiOutlineDelete } from "react-icons/ai";
import './Basket.css';

const Basket = () => {
    const [order, setOrder] = useState([]);

    function readBasket() {
        const orDer = JSON.parse(localStorage.getItem('order')) || [];
        setOrder(orDer);
    }

    useEffect(() => {
        readBasket();
    }, []);

    const increaseQuantity = (index) => {
        const newOrder = [...order];
        newOrder[index].quantity += 1; 
        setOrder(newOrder);
        localStorage.setItem('order', JSON.stringify(newOrder)); 
    };

    const decreaseQuantity = (index) => {
        const newOrder = [...order];
        if (newOrder[index].quantity > 1) { 
            newOrder[index].quantity -= 1; 
            setOrder(newOrder);
            localStorage.setItem('order', JSON.stringify(newOrder)); 
        } else {
            const confirmed = window.confirm("Удалить товар из корзины?");
            if (confirmed) {
                removeItem(index); 
            }
        }
    };

    const removeItem = (index) => {
        const newOrder = order.filter((_, i) => i !== index); 
        setOrder(newOrder);
        localStorage.setItem('order', JSON.stringify(newOrder)); 
    };

    return (
        <div id='basket'>
            <div className="container">
                <h1 className='text1'>Ваши заказы.</h1>
                <div className="basket">
                    {order.map((el, index) => (
                        <div className="basKet" key={index}>
                            <div className="basket-block">
                                <div className="bas-img">
                                    <img src={el.prod} alt={el.name} />
                                    <div className="sum">
                                    </div>
                                </div>
                                <div className="bas-text">
                                    <h3>{el.name}</h3>
                                    <p>{el.about}</p>
                                    <div className="price">
                                        <div className="total-price">
                                        <span> {`${(Number(el.age) * Number(el.quantity))}$`}</span> 
                                    </div>
                                    <button onClick={() => increaseQuantity(index)}><FiPlus /></button>
                                    <span className='quantity'>{el.quantity}</span>

                                        <button onClick={() => decreaseQuantity(index)}><FaMinus /></button>
                                        <button onClick={() => removeItem(index)}><AiOutlineDelete /></button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Basket;
