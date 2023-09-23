import React, {useState} from 'react';
import "./navbar.css"
import logo from "../../assets/logo.png";
import contactImg from "../../assets/contact.png";
import { Link } from 'react-scroll';
import menu from "../../assets/menu.png";
const Navbar = () => {
  const [showMenu,setShowMenu]=useState(false);
  return (
    <nav className='navbar'>
      <img src={logo} alt='Logo' className='logo'/>
      <div className='laptopMenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='laptopMenuListItem'>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='laptopMenuListItem'>About Me</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='laptopMenuListItem'>Projects</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='laptopMenuListItem'>Contact Me</Link>
      </div>
      <button className='laptopMenuBtn' onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior:'smooth'});
      }}>
        <img src={contactImg} alt='' className='laptopMenuImg' />Contact Me</button>
        <img src={menu} alt='Menu' className='mobMenu'onClick={()=>setShowMenu(!showMenu)}/>
      <div className='navMenu' style={{display: showMenu?'flex':'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItems' onClick={()=>setShowMenu(!false)}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItems' onClick={()=>setShowMenu(!false)}>About Me</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItems' onClick={()=>setShowMenu(!false)}>Portfolio</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItems' onClick={()=>setShowMenu(!false)}>Contact Me</Link>
      </div>
    </nav>
  )
}

export default Navbar;
