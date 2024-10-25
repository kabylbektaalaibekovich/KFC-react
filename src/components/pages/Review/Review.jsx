import React, { useState } from 'react';
import './Review.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Footer from '../../Footer/Footer';

const Review = () => {

    const[rew , setRew] = useState('')
    const [text , setText] = useState('')
    const[empty , setEmpty] = useState('')
    const [email , setEmail] = useState('')
    const [contact, setContact] = useState('')
    function rewData() {
        if (rew.length >= 6 && email.includes("@") && contact.includes("+996") && contact.length == 13) {
            alert("true")
        }else {
            alert("Eerr")
        }

        // if(rew.length <= 9){
        //  alert('KPL')
        // } else if(email !== email.includes('@')){
        //     alert('email')
        // }
        // else if ( rew === text ) {
        //     setEmpty('Поле обязательно')
        // } else if ( rew.length !== 6) {
        //     setText(' Email not send!')
        // }
    }
    
    return (
        
    
        <div id='review'>
            <div className="container">
                <div className="review">
                    <h1>Обратная связь</h1>
         <div className="rew">
            <div className="rew-img">
         <img src="https://www.kfc.kg/dist/images/feedback-cover.png" alt="" />

            </div>
         <div className="review-card">
                        
                        <p>Оцените свой опыт работы с нами и помогите нам оптимизировать наши продукты и услуги</p>
                        <div className="krch">
                            <h3>Оцените нас</h3>
                           
                            <div className="rating">
 <h5>Рейтинги</h5>

 <span><Rating  name="size-large" defaultValue={0} size="large" /></span>
</div>
<div className="review-input">
<TextField onChange={(e) => setRew(e.target.value)} id="outlined-basic" label="Имя" variant="outlined" />
<TextField onChange={(e) => setEmail(e.target.value)} id="outlined-basic" label="Электронная почта" variant="outlined" />
<TextField onChange={(e) => setContact(e.target.value)} id="outlined-basic" label="Контактный телефон" variant="outlined" />



 </div>
 <div className="eror">
    <h6>{empty}</h6>
    <h6>{empty}</h6>
    <h6>{empty}</h6>

</div>
 <div className="input1">
<input onChange={(e) => setRew(e.target.value)} className='input1' type="text" placeholder='Комментарий' />
<h6>{empty}</h6>

</div>
<div className="review-btn">
<Button onClick={() => rewData()} variant="contained" size="large"> Отправить</Button>

</div>
<h4>{text}</h4>
</div> 
</div>
</div>
</div>
</div>
<Footer/>
</div>
    );
};

export default Review;