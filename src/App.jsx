import { useState, useEffect } from 'react';
// import Navbar from './components/Navbar';
import VoltajesForm from './components/VoltajesForm';
import CorrientesForm from './components/CorrientesForm';
import CantidadElementos from './components/CantidadElementos';
import TablaResultados from './components/TablaResultados';
import Footer from './components/Footer';
import TipoMedida from './components/TipoMedida';


function App () {

    const [ tipoMedida, setTipoMedida ] = useState( '' );
    const [ elementos, setElementos ] = useState( 0 );
    const [ mostrarElementos, setMostrarElementos ] = useState( false );
    const [ tablaVoltajes, setTablaVoltajes ] = useState( false );
    const [ tablaCorrientes, setTablaCorrientes ] = useState( false );
    const [ dataVoltaje, setDataVoltaje ] = useState( [] );
    const [ dataCorriente, setDataCorriente ] = useState( [] );

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
    }, [ mostrarElementos ] );



    return (
        <>
            <header>
                {/* <Navbar /> */ }
            </header>

            {/* MAIN */ }
            <main className="flex-shrink-0">
                <div className="animate__animated animate__backInUp  container">

                    <div className="bg-light p-5 rounded">

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
                                                    tipoMedida={ elementos }
                                                    setTablaVoltajes={ setTablaVoltajes }
                                                    setTitulos={ setTitulos }
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
                                                        tipoMedida={ elementos }
                                                        setTablaCorrientes={ setTablaCorrientes }
                                                        setTitulos={ setTitulos }
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
                                </>
                            )
                        }



                    </div>

                </div>

            </main>



            {/* FOOTER */ }
            <Footer />

        </>
    );
}

export default App;
