import { useState } from 'react';
import Error from './ui/Error';
import { calculaPromedio, calculaMaximo, calculaMinimo, calculosTotales } from '../helpers/calculos';
import { obtenerEncabezados } from '../helpers/encabezados';
import { diagnosticoCorrientes } from '../helpers/diagnosticos';

const CorrientesForm = ( { setDataCorriente, elementos, setTablaCorrientes, setTitulos, crearDiagnostico, tipoMedida } ) => {

    const [ formValues, setFormValues ] = useState( {
        ia: 0,
        ib: 0,
        ic: 0
    } );

    const [ error, setError ] = useState( false );
    const [ mensajeError, setMensajeError ] = useState( '' );


    const { ia, ib, ic } = formValues;
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
            delete formValues.ib;
            if ( isNaN( ia ) || isNaN( ic ) ) {
                setError( true );
                setMensajeError( "No se permiten valor nulos" );
                return;
            }
        } else {
            // validando nulos
            if ( isNaN( ia ) || isNaN( ib ) || isNaN( ic ) ) {
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
        setDataCorriente( dataTotal );

        // pasamos datos al diagnostico
        const diagnostico = diagnosticoCorrientes( bases, dataTotal, tipoMedida, elementos );
        crearDiagnostico( diagnostico );

        setTablaCorrientes( true );

        const encabezados = obtenerEncabezados( elementos );
        // console.log( encabezados );

        setTitulos( encabezados );

        // limpiamos cuando pase la validacion
        setError( false );
        setMensajeError( '' );

    };



    return (
        <>
            <h2>Corrientes</h2>

            {
                error &&
                <Error
                    mensaje={ mensajeError }
                />
            }
            <form onSubmit={ handleSubmit } className="row g-2 text-center">

                <div className={ `animate__animated animate__fadeIn form-group ${ elementos > 2 ? 'col-md-4' : 'col-md-6' }` }>
                    <label htmlFor="ia" ><h6>IA</h6></label>
                    <input
                        type="number"
                        name="ia"
                        className="form-control"
                        placeholder="IA"
                        min="0"
                        step="any"
                        value={ ia }
                        onChange={ handleInputChange }
                    />
                </div>
                {
                    ( elementos > 2 ) &&
                    <div className="form-group col-md-4 animate__animated animate__fadeIn">
                        <label htmlFor="ib"><h6>IB</h6></label>
                        <input
                            type="number"
                            name="ib"
                            className="form-control"
                            placeholder="IB"
                            min="0"
                            step="any"
                            value={ ib }
                            onChange={ handleInputChange }
                        />
                    </div>

                }

                <div className={ `animate__animated animate__fadeIn form-group ${ elementos > 2 ? 'col-md-4' : 'col-md-6' }` }>
                    <label htmlFor="ic"><h6>IC</h6></label>
                    <input
                        name="ic"
                        type="number"
                        className="form-control"
                        placeholder="IC"
                        min="0"
                        step="any"
                        value={ ic }
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

export default CorrientesForm;
