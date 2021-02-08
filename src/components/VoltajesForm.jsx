import { useState } from 'react';
import Error from './ui/Error';
import { calculaPromedio, calculaMaximo, calculaMinimo, calculosTotales } from '../helpers/calculos';
import { obtenerEncabezados } from '../helpers/encabezados';
import { diagnosticoVoltajes } from '../helpers/diagnosticos';





const VoltajesForm = ( { setDataVoltaje, elementos, setTablaVoltajes, setTitulos, crearDiagnostico, tipoMedida } ) => {

    const [ formValues, setFormValues ] = useState( {
        vla: 0,
        vlb: 0,
        vlc: 0
    } );

    const [ error, setError ] = useState( false );
    const [ mensajeError, setMensajeError ] = useState( '' );


    const { vla, vlb, vlc } = formValues;
    // const { promedio, max, min } = resultados;

    // Leer los datos del formulario y colocarlos en el state
    // cambiamos los values en el state
    const handleInputChange = ( { target } ) => {
        // console.log( setDataVoltaje );
        // console.log( target.name );
        setFormValues( {
            ...formValues,
            [ target.name ]: parseFloat( target.value )
        } );

    };

    const handleSubmit = async ( e ) => {
        e.preventDefault();
        // console.log( formValues );

        // VALIDACION TIPO MEDIDA
        if ( elementos === 2 ) {

            // se borra 1 elemento
            delete formValues.vlb;
            if ( isNaN( vla ) || isNaN( vlc ) ) {
                setError( true );
                setMensajeError( "No se permiten valor nulos" );
                return;
            }
        } else {
            // validando nulos
            if ( isNaN( vla ) || isNaN( vlb ) || isNaN( vlc ) ) {
                setError( true );
                setMensajeError( "No se permiten valor nulos" );
                return;
            }
        }

        const bases = {
            promedio: calculaPromedio( formValues ),
            max: calculaMaximo( formValues ),
            min: calculaMinimo( formValues ),
        };

        // const { promedio, max, min } = bases;

        // funcion para el calculo total
        const dataTotal = calculosTotales( bases, formValues );
        setDataVoltaje( dataTotal );

        // pasamos datos al diagnostico
        const diagnostico = diagnosticoVoltajes( bases, dataTotal, tipoMedida, elementos );
        crearDiagnostico( diagnostico );
        setTablaVoltajes( true );

        const encabezados = obtenerEncabezados( elementos );
        // console.log( encabezados );
        setTitulos( encabezados );

        // limpiamos cuando pase la validacion
        setError( false );
        setMensajeError( '' );

    };



    return (
        <>
            <h2>Voltajes</h2>

            {
                error &&
                <Error
                    mensaje={ mensajeError }
                />
            }
            <form onSubmit={ handleSubmit } className="row g-2 text-center">

                <div className={ `animate__animated animate__fadeIn form-group ${ elementos > 2 ? 'col-md-4' : 'col-md-6' }` }>
                    <label htmlFor="vla" ><h6>VLA</h6></label>
                    <input
                        type="number"
                        name="vla"
                        className="form-control"
                        placeholder="VLA"
                        min="0"
                        step="any"
                        value={ vla }
                        onChange={ handleInputChange }
                    />
                </div>
                {
                    ( elementos > 2 ) &&
                    <div className="form-group col-md-4 animate__animated animate__fadeIn">
                        <label htmlFor="vlb"><h6>VLB</h6></label>
                        <input
                            type="number"
                            name="vlb"
                            className="form-control"
                            placeholder="VLB"
                            min="0"
                            step="any"
                            value={ vlb }
                            onChange={ handleInputChange }
                        />
                    </div>

                }

                <div className={ `animate__animated animate__fadeIn form-group ${ elementos > 2 ? 'col-md-4' : 'col-md-6' }` }>
                    <label htmlFor="vlc"><h6>VLC</h6></label>
                    <input
                        name="vlc"
                        type="number"
                        className="form-control"
                        placeholder="VLC"
                        min="0"
                        step="any"
                        value={ vlc }
                        onChange={ handleInputChange }
                    />
                </div>

                <div className="form-group col-md-12 mt-3">
                    <button type="submit" className="btn btn-dark w-100">CALCULAR</button>

                </div>


            </form>
        </>
    );
};

export default VoltajesForm;
