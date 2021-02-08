
import { useEffect, useState } from 'react';

const CantidadElementos = ( { setElementos, setTablaVoltajes, setTablaCorrientes, setTablaAngulos } ) => {

    const [ elementos, setCantElementos ] = useState( 0 );

    const handleChange = ( { target } ) => {
        setCantElementos( parseInt( target.value ) );
    };

    useEffect( () => {
        if ( elementos === 0 ) {
            setElementos( elementos );
            setTablaVoltajes( false );
            setTablaCorrientes( false );
            setTablaAngulos( false );
        } else {
            setElementos( elementos );
            setTablaVoltajes( false );
            setTablaCorrientes( false );
            setTablaAngulos( false );
        }
    }, [ elementos, setTablaCorrientes, setTablaVoltajes, setElementos, setTablaAngulos ] );


    return (
        <>  
            <label htmlFor="elementos"><h6>Cant. Elementos</h6></label>
            <select
                name="elementos"
                // value="0"
                onChange={ handleChange }
                className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option value="0">Seleccione Cant Elementos</option>
                <option value="2">Dos Elementos</option>
                <option value="3">Tres Elementos</option>
            </select>
        </>
    );
};

export default CantidadElementos;
