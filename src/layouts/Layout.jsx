import React from 'react';
import Header from "../components/common/Header";
import {Outlet} from "react-router-dom";
import Default from './Default.css';
import NavStyle from '../components/common/Nav.module.css';
import MenuBtn from "../components/common/MenuBtn";
import {CurrentTitleProvider} from "../context/CurrentTitleContext";
import {MenuContextProvider} from "../context/MenuContext";
import Main from '../pages/home/Main';

export default function Layout() {
    return (
        <>

            <MenuContextProvider>
                <CurrentTitleProvider>
                    <div className='wrapper'>
                        <MenuBtn/>
                        <div className={NavStyle.flex}>
                        
                            <Header/>
                            <main>
                                <Outlet/>
                                <Main />
                            </main>
                        </div>
                    </div>
                </CurrentTitleProvider>
            </MenuContextProvider>

        </>
    );
}
