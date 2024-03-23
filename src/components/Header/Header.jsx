import React , {useRef, useCallback, useEffect}from "react";
import "./header.css";
import { Container, Row } from "reactstrap";
import logo from "../../assets/images/eco-logo.png";
import { NavLink } from "react-router-dom";
import userIcon from "../../assets/images/user-icon.png";
import { motion } from "framer-motion";

const nav__links= [
  {
    path:"home",
    display:'Home'
  },
  {
    path:"shop",
    display:'Shop'
  },
  {
    path:"cart",
    display:'Cart'
  },

];



export default function Header() {

const headerRef = useRef(null);
const stickyHeaderFunc = ()=>{
const menuRef = useRef(null);

  window.addEventListener('scroll', ()=>{
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ){

      headerRef.current.classList.add('sticky__header');
    }else{
      headerRef.current.classList.remove('sticky__header');

    }
  })
}

useEffect(()=>{

  stickyHeaderFunc();

  return ()=> window.removeEventListener('scroll', stickyHeaderFunc)
});

const menuToggle = ()=> menuRef.current.classList.toggle('active__menu');

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="Logo" />
            <h1>CozyCorner</h1>
            {/* <p>Since 1995</p> */}
            </div>

            <div className="navigation"  ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
               {
                nav__links.map((item, index) =>(
                  <li className="nav__item" key={index}>
                    <NavLink to={item.path} className={(navClass=>
                      navClass.isActive ? 'nav__active':'')}>{item.display}</NavLink>
                  </li>
                ))
               }
              </ul>
            </div>

            <div className="nav__icons">
              <span className="fav__icon">
                <i class="ri-heart-line"></i>
                <div className="badge">1</div>
              </span>

              <span className="cart__icon">
              <i class="ri-shopping-bag-line"></i>
              <div className="badge">2</div>

              </span>

              <span>
                <motion.img whileTap={{scale : 1.2 }} src={userIcon} alt="UserIcon" />
              </span>

              
            <div className="mobile__menu">
              <span onClick={menuToggle}><i class="ri-menu-line"></i></span>
            </div>

            </div>


          </div>
        </Row>
      </Container>
    </header>
  );
}
