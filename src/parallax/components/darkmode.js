
import { useEffect, useState } from 'react';
import './darkmode.css';

function Darktoligh(){
    const[theme,setTheme]=useState(false);

    const handleClick=()=>{
        setTheme(!theme)
    }
    useEffect(()=>{
        if(theme==true){
            document.body.classList.add("dark")
        }else{
            document.body.classList.remove("dark")
        }

    })
}


export const darkmode = () => {
    return(
        <div>
            <button className='btn' onClick={handleClick()}> Altere </button>
        </div>
    )
}

export default darkmode;