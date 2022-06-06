import styles from './App.module.scss';
import React, { useState, useEffect } from "react";
import Header from '../Header/Header';
import { BrowserRouter } from "react-router-dom";
import AppRoutes from '../../Routers/AppRoutes';
import ScrollToUp from "../ScrollToUp/ScrollToUp";
import ScrollToTop from "../ScrollToTop/ScrollToTop";




const App = () => {

    const [quadcopter, setQuadcopter] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./db.json');
                const data = await response.json();
                setQuadcopter(data.quadcopter);

            } catch (e) {
                console.error('error fetching data from server')
            }
        }
        fetchData();
    }, []);


    return (
        <BrowserRouter>
            <div className={styles.App}>
                <ScrollToTop/>
                <ScrollToUp/>
                <Header data={quadcopter} />
                <AppRoutes data={quadcopter} setQuadcopter={setQuadcopter} />
            </div>
        </BrowserRouter>
    );
}


export default App;

