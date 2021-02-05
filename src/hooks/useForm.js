
import { useState } from 'react';


// recibe un objeto para los formularios
export const useForm = ( initialState = {} ) => {
    //hook
    const [ values, setValues ] = useState( initialState );

   
    // limpiar formularios
    const reset = () => {
        setValues( initialState );
    };

    const handleInputChange = ( { target } ) => {
        setValues( {
            ...values,
            [ target.name ]: target.value,
        } );
    };

    // retornamos como un array
    return [ values, handleInputChange, reset ];
};