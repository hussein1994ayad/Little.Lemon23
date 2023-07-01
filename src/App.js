import './App.css';
import Nav from './Main_Components/Nav.js';
import Footer from './/Main_Components/Footer.js';
import Home from './/Main_Components/Home.js';
import AboutPage from './Main_Components/AboutPage.js';
import {Routes, Route} from 'react-router-dom';
import OrderOnline from './Main_Components/OrderOnline.js';
import Login from './Main_Components/Login.js';
import Menu from './Main_Components/Menu.js';
import BookingPage from './Main_Components/BookingPage.js';
import React, {useReducer} from 'react';
import fetchAPI from './Api';


function App() {
  const updateTimes = (availableTime, date) => {
    var curr = new Date(date);
    curr.setMinutes(curr.getMinutes() + curr.getTimezoneOffset());
    return fetchAPI(curr);
  }

  const initializeTimes = () => {return fetchAPI(new Date())};

  const [availableTime, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutpage" element={<AboutPage/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/BookingPage" element={<BookingPage availableTime={availableTime} dispatch={dispatch}/>} />
        <Route path="/orderonline" element={<OrderOnline/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
