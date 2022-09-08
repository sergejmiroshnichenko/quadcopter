import React, {useState, useEffect} from "react";
import {BrowserRouter} from "react-router-dom";
import Header from '../Header/Header';
import AppRoutes from '../../Routers/AppRoutes';
import ScrollToUp from "../ScrollToUp/ScrollToUp";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProductsFilter from "../ProductsFilter/ProductsFilter"
import styles from './App.module.scss';


const App = () => {

    const [quadcopter, setQuadcopter] = useState([]);
    const [filter, setFilter] = useState('All');

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


    const filterItems = (quadcopter, filter) => {
        switch (filter) {
            case "black":
                return quadcopter.filter(item => item.color === "black");
            case "white":
                return quadcopter.filter(item => item.color === "white");
            case "orange":
                return quadcopter.filter(item => item.color === "orange");
            case "grey":
                return quadcopter.filter(item => item.color === "grey");
            default:
                return quadcopter
        }
    }

    const visibleData = filterItems(quadcopter, filter);

    const onFilterSelect = (filter) => {
        setFilter(filter)
    }


    return (
        <BrowserRouter>
            <div className={styles.App}>
                <ScrollToTop/>
                <ScrollToUp/>
                <Header data={visibleData}/>
                <ProductsFilter filter={filter} onFilterSelect={onFilterSelect}/>
                <AppRoutes data={visibleData} setQuadcopter={setQuadcopter}/>
            </div>
        </BrowserRouter>
    );
}


export default App;

