import { useState, useEffect } from "react";

const UseLocalStorage = (key, defalultValue = null) => {
    const [value, setValue] = useState(() =>{
        try {
            const item= localStorage.getItem(key);
            if(item !== null){
                return JSON.parse(item);
            }

            return defalultValue
        }
        catch(errror){
            return defalultValue

        }
        });

        useEffect(() => {
            localStorage.setItem(key, JSON.stringify(value));
        },[key, value]);

        return [value, setValue];
    };

    export default UseLocalStorage
