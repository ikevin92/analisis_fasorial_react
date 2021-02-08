import { obtenerCorrienteMax, obtenerVoltajeMax } from './calculos';

export const diagnosticoCorrientes = async ( bases, dataTotal, tipoMedida, elementos ) => {

    // console.log( dataTotal );
    let num = 0;
    let resultados = [];
    let desbalances = [];

    let temp = {
        tipo: 'CORRIENTE',
        calificacion: '',
        desc: ''
    };

    // console.log( tipoMedida );


    if ( bases.max > obtenerCorrienteMax( tipoMedida ) ) {
        temp.calificacion = '-';
        temp.desc = `VALIDAR QUE UNA DE LAS FASES NO SEA SUPERIOR A ${ obtenerCorrienteMax( tipoMedida ) }A, POSIBLE SATURACION DE TCS`;
        resultados.push( {
            ...temp
        } );
    } else {
        temp.calificacion = '+';
        temp.desc = `CORRIENTES DENTRO DEL RANGO`;
        resultados.push( {
            ...temp
        } );
    }



    for ( const data in dataTotal ) {
        // console.log( "FOR DATA IN:", dataTotal[ data ] );


        for ( const d in dataTotal[ data ] ) {
            let valor = dataTotal[ data ][ d ];
            let long = valor.length - 1;
            // console.log( "FOR d IN:", valor );

            if ( typeof ( valor ) === 'string' && valor.slice( -1 ) === '%' ) {
                num = parseFloat( valor.substr( 1, long ) );
                num = Math.abs( num );

                desbalances.push( num );
            }

        }
    }

    const maximo = Math.max( ...desbalances );

    if ( maximo > 5 && elementos === 2 ) {
        temp.calificacion = '-';
        temp.desc = `DESBALANCE DE CORRIENTE DEL ${ maximo }%, VALIDAR DISTRIBUCION DE CARGAS, MEDIDAS DOS ELEMENTOS DEBEN MANTENER UN MARGEN MAXIMO DEL 5%, `;
        resultados.push( {
            ...temp
        } );
    } else if ( maximo > 5 && elementos === 3 ) {
        temp.calificacion = '-';
        temp.desc = `SE PRESENTA DESBALANCE DE CORRIENTE DEL ${ maximo }%, CONFIRMAR CON EL PERSONAL DE TERRENO QUE CARGAS ESTAN CONECTADAS`;
        resultados.push( {
            ...temp
        } );
    } else {
        temp.calificacion = '+';
        temp.desc = `CORRIENTES BALANCEADAS ${ maximo }%`;
        resultados.push( {
            ...temp
        } );
    }

    // console.log( "MAXIMO:", maximo );

    // console.log( "array: ", desbalances );

    // console.log( resultados );

    return resultados;
};


export const diagnosticoVoltajes = async ( bases, dataTotal, tipoMedida, elementos ) => {

    // console.log( dataTotal );
    let num = 0;
    let resultados = [];
    let desbalances = [];

    let temp = {
        tipo: 'VOLTAJE',
        desc: ''
    };

    // console.log( tipoMedida );


    if ( bases.max > obtenerVoltajeMax( elementos ) ) {
        temp.calificacion = '-';
        temp.desc = `VALIDAR SOBRETENSION SUPERIOR A ${ obtenerVoltajeMax( elementos ) }V`;
        resultados.push( {
            ...temp
        } );
    } else {
        temp.calificacion = '+';
        temp.desc = `VOLTAJE DENTRO DEL RANGO`;
        resultados.push( {
            ...temp
        } );
    }



    for ( const data in dataTotal ) {
        // console.log( "FOR DATA IN:", dataTotal[ data ] );


        for ( const d in dataTotal[ data ] ) {
            let valor = dataTotal[ data ][ d ];
            let long = valor.length - 1;
            // console.log( "FOR d IN:", valor );

            if ( typeof ( valor ) === 'string' && valor.slice( -1 ) === '%' ) {
                num = parseFloat( valor.substr( 1, long ) );
                num = Math.abs( num );

                desbalances.push( num );
            }

        }
    }

    const maximo = Math.max( ...desbalances );

    if ( maximo > 5 && elementos === 2 ) {
        temp.calificacion = '-';

        temp.desc = `DESBALANCE DE TENSIONES DEL ${ maximo }%, VALIDAR CONEXION`;
        resultados.push( {
            ...temp
        } );
    } else if ( maximo > 5 && elementos === 3 ) {
        temp.calificacion = '-';
        temp.desc = `SE PRESENTA DESBALANCE DE TENSIONES DEL ${ maximo }%, CONFIRMAR CON EL PERSONAL DE TERRENO QUE CARGAS ESTAN CONECTADAS`;
        resultados.push( {
            ...temp
        } );
    } else {
        temp.calificacion = '+';
        temp.desc = `TENSIONES BALANCEADAS ${ maximo }%`;
        resultados.push( {
            ...temp
        } );
    }

    // console.log( "MAXIMO:", maximo );

    // console.log( "array: ", desbalances );

    // console.log( resultados );

    return resultados;
};

