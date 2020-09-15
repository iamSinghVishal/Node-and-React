import React from 'react';

const ButtonDec = (props) =>{
    return <button onClick={
        e=>{
            props.clickButton()
        }
    }>Decrement</button>
}
export default ButtonDec;