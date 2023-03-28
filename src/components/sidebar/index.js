import React, { useEffect, useState } from 'react'
import "./sidebar.css"
import profilePic  from '../../assets/images/proPic.png'
import SidebarButton from './sidebarButton'
import { MdFavorite } from "react-icons/md";
import { FaGripfire,FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdFeed } from "react-icons/md";
import apiClient from '../../spotify';


const SideBar = () => {
  const [image, setImage] =  useState();
  useEffect(() =>{
    apiClient.get("me").then((response) => {
      setImage(response.data.images);
    });
  },[]);
  
  return (
    <>
     <div className="main-sidebar">
        <img src={!image ? image : profilePic} alt="profile" className='profile-pic' />
        <div className="si">
          <SidebarButton title='Feed' to="./feeds" icon={<MdFeed/>}/>
          <SidebarButton title='Tending' to="./tending" icon={<FaGripfire/>}/>
          <SidebarButton title='Player' to="./player" icon={<FaPlay/>}/>
          <SidebarButton title='Favorite' to="./favorite" icon={<MdFavorite/>}/>
          <SidebarButton title='Library' to="./library" icon={<IoLibrary/>}/>
        </div>
        <SidebarButton title='SignIn' to="./signin" icon={<FaSignOutAlt/>} 
        />
     </div>
    </>
  )
}

export default SideBar;