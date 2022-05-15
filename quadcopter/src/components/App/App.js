import styles from './App.module.scss';
import {useState, useEffect} from "react";
import Header from '../Header/Header';
import {BrowserRouter} from "react-router-dom";
import Routers from '../../Routers/Routers';



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
        // setLoading(false);
    }

    fetchData();

    }, []);




    // useEffect( () => {
    //     (async () => {
    //         const fetchItem = await fetch('./db.json')            /*   variant # 2   */
    //             .then(fetchItem => fetchItem.json())
    //         setQuadcopter(fetchItem.quadcopter)
    //     }) ()
    // }, [])



    return (
        <BrowserRouter>
            <div className={styles.App}>
                <Header data={quadcopter}/>
                <Routers data={quadcopter} setQuadcopter={setQuadcopter}/>
                {/*{loading && 'Loading...'}*/}
            </div>
        </BrowserRouter>

    );
}




export default App;

