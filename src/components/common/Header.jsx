import React, {useContext} from 'react';
import Navbar from "./Navbar";
import Default from "../../layouts/Default.css"
import NavStyle from './Nav.module.css';
import Board from "../../pages/board/Board";
import ApprovalNav from "../approval/ApprovalNav";
import {CurrentTitleContext} from "../../context/CurrentTitleContext";
import HomeNav from "../../pages/home/HomeNav";
import {MenuContext} from "../../context/MenuContext";
import  ContactNav from "../contact/ContactNav"


function Header() {
    const {currentTitle, toggleTitle } = useContext(CurrentTitleContext);
    const {menuState, toggleMenu} = useContext(MenuContext);
    return (
        <header className={menuState === false ? NavStyle.close : ''}>
            <Navbar/>

            {
                currentTitle === 'Home' && <HomeNav/> ||
                currentTitle === 'Board' && <Board/> ||
                currentTitle === 'Approval' && <ApprovalNav/> ||
                currentTitle === 'Contact' && <ContactNav /> 
            }

        </header>
    );
}

export default Header;