import React, { useState } from 'react';
import './Admin.css'

import vido from '../../video/Video.mp4'
import { useMain } from '../../Context/Context';
const Admin = (props) => {
 
      
  const {prod ,  setProd,  name ,  setName, about ,setAbout,age , setAge,   setDate, category ,  setCategory,} = useMain()

const  createData =() =>{
let obj = {
    prod,
    name, 
    about,
    age,
    category,
    id:Date.now()

}
let local = JSON.parse(localStorage.getItem('data')) || []
local.push(obj)
localStorage.setItem('data' , JSON.stringify(local))
setProd('')
setName('')
setAbout('')
setAge('')
setDate('')
setCategory('')
}
return (
        <div id="admin">

            <div className="container">
             
                <div className="admin">
                    <div className="video">
                        <video autoPlay loop muted src={vido}></video>
                    </div>
                    <div className="inputs">
                        <input onChange={(e) => setProd(e.target.value)} type="" placeholder='Еда' value={prod}/>
                        <input onChange={(e) => setName(e.target.value)} type="text"  placeholder='Название еды' value={name}/>
                        <input onChange={(e) => setAbout(e.target.value)} type="text" placeholder='О еде' value={about}/>
                        <input onChange={(e) => setCategory(e.target.value)} type="text" placeholder='Категория' value={category}/>
                        <input  onChange={(e) => setAge(e.target.value)}type="text" placeholder='Цена'  value={age}/>
                         <button onClick={() => createData()}>Добавить</button>
                    </div>
                    
                </div>
            </div>

        </div>

    );
};

export default Admin;