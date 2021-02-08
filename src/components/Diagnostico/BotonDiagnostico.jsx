
import { useState } from 'react';

const BotonDiagnostico = ( { habilitar, setMostrarDiagnostico, setBotonDiagnostico } ) => {

    // console.log( 'boton state: ', habilitar );
    // const [ estadoBoton, setEstadoBoton ] = useState( habilitar );


    const handleClick = () => {
        // console.log( 'ejecutando diagnostico ...' );
        setMostrarDiagnostico( true );
        setBotonDiagnostico( true );
    };

    // useEffect(() => {
    //     setEstadoBoton()
    // }, [input])

    return (
        <>
            <button
                className="btn btn-success w-100"
                disabled={ habilitar }
                onClick={ handleClick }
            >Ejecutar Diagnostico</button>
        </>
    );
};

export default BotonDiagnostico;
