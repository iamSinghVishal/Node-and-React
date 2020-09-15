import React from 'react';

const Dropdown = (props)=>{
    //var list =["kiran","vishal","raghav"];
    return <select>
       {props.list.map((item,index)=>{
           return <option value={index}>{item}</option>
       })}
    </select>
};
export default Dropdown;