import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Menu from './components/pages/Menu/Menu';
import Restoran from './components/pages/Restoran/Restoran';
import Admin from './components/pages/Admin/Admin';
import About from './components/pages/About/About';
import Infa from './components/Infa/Infa';
import Ingred from './components/pages/Ingred/Ingred';
import loading from '../src/components/images/Ellipsis@1.25x-1.5s-200px-200px.gif'
import { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';
import Review from './components/pages/Review/Review';
import Basket from './components/pages/Basket/Basket';
function App() {
  const [load , setload ] = useState(false)
  function loadData(){
setTimeout(() => {
  setload(!load)
}, 2000)
  }
  useEffect(() => {
    loadData()
  }, [])
  return !load ? (
    <div className='load'>
      <img src='https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png'></img>
      <div className='load-2'>
      <img src={loading}></img>

      </div>
    </div> ) : (
    <div className="App">
<Header/>
<Routes>
  <Route path='/' element={<Section/>}/>
  <Route path='/menu' element={<Menu/>}/>
  <Route path='/restoran' element={<Restoran/>}/>
  <Route path='/admin' element={<Admin/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/infa' element={<Infa/>}/>
  <Route path='/ingred' element={<Ingred/>}/>
  <Route path='/review' element={<Review/>}/>
<Route path='/basket' element={<Basket/>}/>
</Routes>
{/* <Footer/> */}
    </div>
  );
}

export default App;
