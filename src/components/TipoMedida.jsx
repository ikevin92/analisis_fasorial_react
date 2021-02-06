import { useEffect, useState } from 'react';


const TipoMedida = ( { setMostrarElementos, guardarTipoMedida } ) => {


    const [ tipoMedida, setTipoMedida ] = useState( '' );

    const handleChange = ( { target } ) => {
        setTipoMedida( ( target.value ) );
    };

    useEffect( () => {
        if ( tipoMedida === "" ) {
            setMostrarElementos( false );
            guardarTipoMedida( tipoMedida );

        } else {
            setMostrarElementos( true );
            guardarTipoMedida( tipoMedida );
        }
    }, [ guardarTipoMedida, setMostrarElementos, tipoMedida ] );



    return (
        <select
            name="tipomedida"
            // value="0"
            onChange={ handleChange }
            className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option value="">Seleccione Tipo Medida: </option>
            <option value="directa">Directa</option>
            <option value="semi">Semi-directa</option>
            <option value="indirecta">Indirecta</option>
        </select>
    );
};

export default TipoMedida;
