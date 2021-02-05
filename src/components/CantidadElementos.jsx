
import { useEffect, useState } from 'react';

const CantidadElementos = ( { setTipoMedida, setTablaVoltajes } ) => {

    const [ elementos, setElementos ] = useState( 0 )
    
    const handleChange = ( { target } ) => {
        setElementos( parseInt( target.value ) );
    }

    useEffect( () => {
        if ( elementos === 0 ) {
            setTipoMedida( elementos )
            setTablaVoltajes( false );
        } else {
            setTipoMedida( elementos )
        }

    }, [elementos, setTablaVoltajes, setTipoMedida] );

   
    return (
        <select
            name="tipoMedida"
            // value="0"
            onChange={ handleChange }
            className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option value="0">Seleccione el Tipo de Medida</option>
            <option value="2">Dos Elementos</option>
            <option value="3">Tres Elementos</option>
        </select>
    );
};

export default CantidadElementos;
