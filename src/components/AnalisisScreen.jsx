import { useState, useEffect } from 'react';
// import Navbar from './components/Navbar';
import VoltajesForm from './VoltajesForm';
import CorrientesForm from './CorrientesForm';
import CantidadElementos from './CantidadElementos';
import TablaResultados from './TablaResultados';
import TipoMedida from './TipoMedida';
import AngulosForm from './AngulosForm';
import BotonDiagnostico from './Diagnostico/BotonDiagnostico';
import TablaDiagnosticos from './Diagnostico/TablaDiagnosticos';


const AnalisisScreen = () => {

    const [ tipoMedida, setTipoMedida ] = useState( '' );
    const [ elementos, setElementos ] = useState( 0 );
    const [ mostrarElementos, setMostrarElementos ] = useState( false );
    const [ mostrarDiagnostico, setMostrarDiagnostico ] = useState( false );
    // state para mostrar u ocultrar tablas
    const [ tablaVoltajes, setTablaVoltajes ] = useState( false );
    const [ tablaCorrientes, setTablaCorrientes ] = useState( false );
    const [ tablaAngulos, setTablaAngulos ] = useState( false );
    const [ botonDiagnostico, setBotonDiagnostico ] = useState( true );


    // state para capturar data
    const [ dataVoltaje, setDataVoltaje ] = useState( [] );
    const [ dataCorriente, setDataCorriente ] = useState( [] );
    const [ dataAngulos, setDataAngulos ] = useState( [] );
    const [ dataDiagnosticos, setDataDiagnosticos ] = useState( [] );

    // estate para manejar el evento de ocultar y mostrar 
    const [ mostrarTodo, setMostrarTodo ] = useState( false );

    const [ titulos, setTitulos ] = useState( {
        voltajes: [],
        corrientes: []
    } );

    useEffect( () => {
        if ( mostrarElementos ) {
            setMostrarTodo( true );
        } else {
            setMostrarTodo( false );
        }

        if ( tablaVoltajes && tablaAngulos && tablaCorrientes ) {
            console.log( 'activacion boton' );
            setBotonDiagnostico( false );
        } else {
            setBotonDiagnostico( true );
        }

    }, [ mostrarElementos, tablaAngulos, tablaCorrientes, tablaVoltajes ] );


    // Función que tome las citas actuales y agregue la nueva
    const crearDiagnostico = async ( diagnostico ) => {
        const valor = await diagnostico;
        // console.log( 'crear diagnostico', valor );
        setDataDiagnosticos( [ ...dataDiagnosticos, ...valor ] );
        // console.log( "STATE DATA DIAGNOSTICO:", dataDiagnosticos );
    };
    return (

        <div className="bg-light p-5 rounded animate__animated animate__backInUp">

            <h1 className="text-center">ANALISIS FASORIAL</h1>
            <p className="lead">Seleccione el tipo de Medida e ingrese los datos:</p>


            {/* TIPO MEDIDA */ }
            <div className="row container">
                <TipoMedida
                    setMostrarElementos={ setMostrarElementos }
                    guardarTipoMedida={ setTipoMedida }
                />
            </div>


            {/* CANTIDAD DE ELEMENTOS */ }
            {
                mostrarElementos && (
                    <div className="row container">
                        <CantidadElementos
                            setElementos={ setElementos }
                            setTablaVoltajes={ setTablaVoltajes }
                            setTablaCorrientes={ setTablaCorrientes }
                            setTablaAngulos={ setTablaAngulos }
                        />
                    </div>
                )
            }


            <hr />

            {
                mostrarTodo && (
                    <>
                        {/* FORMULARIO DE VOLTAJES */ }
                        {
                            ( elementos > 0 ) && (
                                <div className="container animate__animated animate__backInLeft ">
                                    <VoltajesForm
                                        setDataVoltaje={ setDataVoltaje }
                                        elementos={ elementos }
                                        setTablaVoltajes={ setTablaVoltajes }
                                        setTitulos={ setTitulos }
                                        crearDiagnostico={ crearDiagnostico }
                                        tipoMedida={ tipoMedida }

                                    />
                                </div>
                            )
                        }

                        {/* TABLA RESULTADO VOLTAJES */ }
                        {
                            tablaVoltajes && (
                                <div className="table-responsive mt-3">
                                    <TablaResultados
                                        titulos={ titulos.voltajes }
                                        data={ dataVoltaje }
                                    />
                                </div>
                            )
                        }

                        {/* FORMULARIO DE CORRIENTES */ }
                        {
                            ( elementos > 0 ) && (
                                <>
                                    <hr />

                                    <div className="container animate__animated animate__backInRight">
                                        <CorrientesForm
                                            setDataCorriente={ setDataCorriente }
                                            elementos={ elementos }
                                            setTablaCorrientes={ setTablaCorrientes }
                                            setTitulos={ setTitulos }
                                            crearDiagnostico={ crearDiagnostico }
                                            tipoMedida={ tipoMedida }
                                        />
                                    </div>
                                </>
                            )
                        }

                        {/* TABLA RESULTADO CORRIENTES */ }
                        {
                            tablaCorrientes && (
                                <div className="row container mt-3">
                                    <TablaResultados
                                        titulos={ titulos.corrientes }
                                        data={ dataCorriente }
                                    />
                                </div>
                            )
                        }


                        {/* FORMULARIO ANGULOS CORRIENTE */ }
                        {
                            ( elementos > 0 ) && (
                                <>
                                    <hr />

                                    <div className="container animate__animated animate__backInRight">
                                        <AngulosForm
                                            setDataAngulos={ setDataAngulos }
                                            elementos={ elementos }
                                            setTablaAngulos={ setTablaAngulos }
                                            setTitulos={ setTitulos }
                                        />
                                    </div>
                                </>
                            )
                        }

                        {/* TABLA RESULTADO ANGULOS CORRIENTE */ }
                        {
                            tablaAngulos && (
                                <div className="row container mt-3">
                                    <TablaResultados
                                        titulos={ titulos.angulos }
                                        data={ dataAngulos }
                                    />
                                </div>
                            )
                        }





                    </>
                )
            }
            <hr />

            {/* TABLA DE DIAGNOSTICOS */ }
            {
                mostrarDiagnostico && (
                    <TablaDiagnosticos
                        data={ dataDiagnosticos }
                    />
                )

            }
            <div className=" mt-3 row">
                <div className="col-12">
                    <BotonDiagnostico
                        habilitar={ botonDiagnostico }
                        setMostrarDiagnostico={ setMostrarDiagnostico }
                        setBotonDiagnostico={ setBotonDiagnostico }
                    />

                </div>

            </div>




        </div>

    );
};

export default AnalisisScreen;
