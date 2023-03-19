import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Library from '../library';
import Favorite from '../favorite';
import Tranding from '../tending';
import Feed from '../feeds';
import Player from '../player';
import "./home.css";
import SideBar from '../../components/sidebar';
import Login from '../auth/login';
import { setClientToken } from '../../spotify';

const Home = () => {
  const [token, setToken] =  useState();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if(!token && hash ){
      const _token = hash.split('$')[0].split("=")[1];
      window.localStorage.setItem("token",_token);
      setToken(_token)
      setClientToken(_token);
    }else {
      setToken(token);
      setClientToken(token);
    }
  }, [])
  
  return (!token ? 
    <Login/> :
      <Router>
        <div className='main-body'>
          <SideBar/>
          {/* <div className="screen-container"> */}
          <Routes>
            <Route path='/' />
            <Route path='/library' element={<Library/>}/>
            <Route path='/favorite' element={<Favorite/>}/>
            <Route path='/tending' element={<Tranding/>}/>
            <Route path='/player' element={<Player/>}/>
            <Route path='/feeds' element={<Feed/>}/>
          </Routes>
          {/* </div> */}
        </div>
      </Router> 
  )
}

export default Home; 
