import { useState } from "react";

const UseList = (initialValue = []) => {
    const [value, setValue] = useState(initialValue);

    const push = (element)=>{
        setValue((oldValue)=>[...oldValue, element]);
    };

    const remove = (index)=>{
        setValue((oldValue)=>oldValue.filter((_, i)=>i !== index));

    };

    const isEmpty = ()=> value.length === 0;

    return{
        value, setValue, push, remove, isEmpty,
    };

    


};

export default UseList;