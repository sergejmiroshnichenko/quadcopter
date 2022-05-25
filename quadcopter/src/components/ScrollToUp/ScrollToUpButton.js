import React from 'react';
import {ReactComponent as ScrollUpIcon} from "../../assets/scroll_up.svg";
import {useState, useEffect} from "react";



const ScrollToUpButton = () => {

    const [scrollToUp, setScrollToUp] = useState(false);

    useEffect (() => {
        window.addEventListener('click', () => {
            if(window.scrollY > 100){
                setScrollToUp(true)
            } else{
                setScrollToUp(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return(
        <div>
            {scrollToUp && <ScrollUpIcon style = {{
                position: 'fixed',
                bottom: '50px',
                right: '50px',
                width: '50px',
                height: '50px',
                fontSize: '26px',
                cursor: 'pointer'
            }} onClick={scrollUp}>
                </ScrollUpIcon>
            }
        </div>
    )
}

export default ScrollToUpButton;