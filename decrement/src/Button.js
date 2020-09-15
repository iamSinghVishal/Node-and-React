import React from 'react';

const Button = (props) =>{
    return <button onClick={
        e=>{
            props.clickButton()
        }
    }>Increment</button>
}
export default Button;