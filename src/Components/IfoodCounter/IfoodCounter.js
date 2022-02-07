import React, {useState, useEffect} from 'react';
import '../IfoodCounter/IfoodCounter.css';

export default function IfoodCounter() {
    
    const [value, setValue] = useState(1)
    const [buttonStyle, setButtonStyle] = useState("counter-button-minus-active")

//userEffection

    useEffect(()=>{
        document.getElementById("moeda").innerHTML = 2.00 * value
    },[value])


  //Função acrecemta valor ao contador  
    function down(){
        
        if (value <= 1){
            setButtonStyle("counter-button-minus-desactive")
            //funcao que desativa o contador <= 0
        }
        if( value > 0){
            setValue(value - 1)
            
        }
        
    }

    function up(){

        if (value >= -1)
        setValue(value + 1)
        setButtonStyle("counter-button-plus-active")

    }

    return(
        <div className="countex-wrapper">
            <button
                className={buttonStyle}
                onClick={down}
            >
                -
            </button>
            <p>{value}</p>
            <button
                className="counter-button-plus-active"
                onClick={up}
            >
                +
            </button>
            <button
                id="moeda"
            >
               12,00
            </button>
         </div>
    )
}
