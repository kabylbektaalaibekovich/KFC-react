import React, { useEffect, useState } from 'react';
import { Link, Element } from 'react-scroll'; 
import 'swiper/css';
import 'swiper/css/navigation';
import './Menu.css';
import { useMain } from '../../Context/Context';

const Menu = () => {
    const { date, setDate, setCategory  } = useMain();
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        const local = JSON.parse(localStorage.getItem('data'));
        setDate(Array.isArray(local) ? local : []); 
    }, [setDate]);

    const handleCategoryClick = (index, category) => {
        setActiveIndex(index); 
        setCategory(category); 
    };

    function creatBasket(el) {
        let orDer = JSON.parse(localStorage.getItem('order')) || [];
        orDer.push(el);
        localStorage.setItem('order', JSON.stringify(orDer));
    }

    // Категории меню
    const categories = [
        'Бестселлеры', 
        'Комбо', 
        'Шаурма', 
        'Гамбургеры', 
        'Обертвания', 
        'Сочная курица', 
        'Картофель фри и закуски', 
        'Соусы', 
        'Ведра', 
        'Десерты', 
        'Горячие напитки'
    ];

    return (
        <div id="menu">
            <div className="container">
                <div className="menu">
                    <nav className="menuNav">
                        <ul>
                            {categories.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item.toLowerCase()} // Ссылка на секцию
                                        smooth={true}
                                        duration={500}
                                        onClick={() => handleCategoryClick(index, item)} 
                                        style={{ color: activeIndex === index ? 'red' : 'black' }}
                                    >
                                        <h1>{item}</h1>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="products">
                    {categories.map((item, index) => (
   
                        <Element name={item.toLowerCase()} key={index} style={{ padding: '50px', borderRadius:'5px' , margin: '10px 0', boxShadow: '0 10px 12px rgba(0, 0, 0, 0.1)'}}>
                            <h2 className='productH2'>{item}</h2>
                            <div className="mainBox">
                                {date.filter(el => el.category === item).map(product => (
                                    <div key={product.id} className="box">
                                        <img className='boxImg' src={product.prod} alt={product.name} />
                                        <h3>{product.name}</h3>
                                        <span>${product.age}</span>

                                        <button onClick={() => creatBasket(product)}>Добавить в корзину</button>

                                    </div>
                                ))}
                            </div>
                        </Element>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;
