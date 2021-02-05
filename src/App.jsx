import { useState } from 'react';
// import Navbar from './components/Navbar';
import VoltajesForm from './components/VoltajesForm';
// import { calculaPromedios, calculoTotal } from './helpers/calculos';
import CorrientesForm from './components/CorrientesForm';
import CantidadElementos from './components/CantidadElementos';
import TablaResultados from './components/TablaResultados';




function App () {

    const [ tipoMedida, setTipoMedida ] = useState( 0 );
    const [ tablaVoltajes, setTablaVoltajes ] = useState( false );
    const [ tablaCorrientes, setTablaCorrientes ] = useState( false );
    const [ titulos, setTitulos ] = useState( {
        voltajes: [],
        corrientes: []
    } );

    const [ dataVoltaje, setDataVoltaje ] = useState( [] );
    const [ dataCorriente, setDataCorriente ] = useState( [] );


    return (
        <>
            {/* <Navbar /> */ }


            <main className="container ">
                <div className="bg-light p-5 rounded">
                    <h1 className="text-center">ANALISIS FASORIAL</h1>
                    <p className="lead">Seleccione el numero de elementos e ingrese los datos:</p>

                    <div className=" row container">
                        <CantidadElementos
                            setTipoMedida={ setTipoMedida }
                            setTablaVoltajes={ setTablaVoltajes }
                            setTablaCorrientes={ setTablaCorrientes }
                        />
                    </div>

                    <hr />

                    {/* FORMULARIO DE VOLTAJES */ }
                    {
                        ( tipoMedida > 0 ) && (
                            <div className="container">
                                <VoltajesForm
                                    setDataVoltaje={ setDataVoltaje }
                                    tipoMedida={ tipoMedida }
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
                                    titulos={ titulos }
                                    data={ dataVoltaje }
                                />
                            </div>
                        )
                    }



                    {/* FORMULARIO DE CORRIENTES */ }


                    {
                        ( tipoMedida > 0 ) && (
                            <>
                                <hr />

                                <div className="container">
                                    <CorrientesForm
                                        setDataCorriente={ setDataCorriente }
                                        tipoMedida={ tipoMedida }
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
                                    titulos={ titulos }
                                    data={ dataCorriente }
                                />
                            </div>
                        )
                    }


                </div>



            </main>

        </>
    );
}

export default App;
