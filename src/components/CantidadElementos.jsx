
import { useEffect, useState } from 'react';

const CantidadElementos = ( { setElementos, setTablaVoltajes, setTablaCorrientes } ) => {

    const [ elementos, setCantElementos ] = useState( 0 );

    const handleChange = ( { target } ) => {
        setCantElementos( parseInt( target.value ) );
    };

    useEffect( () => {
        if ( elementos === 0 ) {
            setElementos( elementos );
            setTablaVoltajes( false );
            setTablaCorrientes( false );
        } else {
            setElementos( elementos );
            setTablaVoltajes( false );
            setTablaCorrientes( false );
        }

    }, [ elementos, setTablaCorrientes, setTablaVoltajes, setElementos] );


    return (
        <select
            name="elementos"
            // value="0"
            onChange={ handleChange }
            className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option value="0">Seleccione Cant Elementos</option>
            <option value="2">Dos Elementos</option>
            <option value="3">Tres Elementos</option>
        </select>
    );
};

export default CantidadElementos;
