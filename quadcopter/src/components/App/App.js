import styles from './App.module.scss';
import React, { useState, useEffect } from "react";
import Header from '../Header/Header';
import { BrowserRouter } from "react-router-dom";
import Routers from '../../Routers/Routers';
import ScrollToUpButton from "../ScrollToUp/ScrollToUpButton";




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
                <ScrollToUpButton/>
                <Header data={quadcopter} />
                <Routers data={quadcopter} setQuadcopter={setQuadcopter} />
            </div>
        </BrowserRouter>
    );
}


export default App;

