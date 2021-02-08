import { obtenerDescripcion } from './encabezados';

export const calculaMaximo = ( objeto ) => {
    const datos = objectToArray( objeto );
    const resultado = Math.max.apply( null, datos );
    return resultado;
};

export const calculaMinimo = ( objeto ) => {
    const datos = objectToArray( objeto );
    const resultado = Math.min.apply( null, datos );
    return resultado;
};

export const calculaPromedio = ( objeto ) => {
    // let suma = 0;
    // let promedio = 0;

    // se convierte el objeto en un array
    const datos = objectToArray( objeto );

   

    // sumamos los elementos del array
    const suma = datos.reduce( ( previous, current ) => current += previous );


    const promedio = parseFloat( ( suma / datos.length ).toFixed( 2 ) );

    
    return promedio;
};

const objectToArray = ( object ) => {
    let data = [];

    for ( const prop in object ) {
        object[ prop ] = parseFloat( object[ prop ] );
        // console.log( `${ prop }: ${ object[ prop ] }` );

        data.push( object[ prop ] );

    }
    console.log( "o to a:", data );
    return data;

};



export const calcularDesbalance = ( base, valor ) => {
    // console.log( base, valor );
    // const desbalance = base / valor;
    let res = ( valor / base );

    res = res * 100;

    res = 100 - res;

    const desbalance = res.toFixed( 2 );

    // console.log( "DESBALANCE: ", desbalance );

    return desbalance;
};


export const calculosTotales = ( bases, valores ) => {
    // console.log( "bases: ", bases );
    // console.log( "valores: ", valores );
    let resultados = [];
    let value = '';


    // console.log( "valores: ", valores );

    let temp = {
        desc: '',
        base: 0,
    };

    for ( const b in bases ) {

        temp.base = bases[ b ];
        temp.desc = obtenerDescripcion( b );

        for ( const v in valores ) {
            // extrae ultima letra del elemento
            value = v.slice( -1 );
            // console.log( value );

            temp[ value ] = calcularDesbalance( bases[ b ], valores[ v ] ) + "%";
        }

        resultados.push( {
            ...temp
        } );

    }

    // console.log( "resultados totales: ", resultados );


    return resultados;
};


export const calcularTipoCarga = ( angulos ) => {
    let resultados = [];
    let value = '';
    let temp = {
        desc: 'TIPO DE CARGA'
    };

    // console.log( angulos );

    for ( const a in angulos ) {
        // extrae ultima letra del elemento
        value = a.slice( -1 );
        // console.log( a );

        temp[ value ] = obtenerTipoCarga( parseFloat( angulos[ a ] ) );


    }

    resultados.push( {
        ...temp
    } );

    // console.log("CALCULAR TIPO CARGA: ", resultados );

    return resultados;

};



export const colorDesviacion = ( valor ) => {
    let long = valor.length - 1;
    // console.log( "extrayendo: ", valor.substr( 1, long ) );
    let num = 0.0;
    // console.log( "TIPO DE DATOS", typeof ( valor.slice( -1 ) ) );
    let className = "";

    if ( valor.slice( -1 ) === '%' ) {
        num = parseFloat( valor.substr( 1, long ) );
        num = Math.abs( num );

        // console.log( "NUMERO: ", num );

        if ( num >= 0 && num <= 2 ) {
            className = 'table-success';
        } else if ( num > 2 && num <= 5 ) {
            className = 'table-warning';
        }
        else if ( num > 5 ) {
            className = 'table-danger';
        }

    } else {

        // console.log( className );

        switch ( valor ) {
            case 'CAPACITIVA':
                className = 'table-primary';
                break;

            case 'INDUCTIVA':
                className = 'table-secondary';
                break;

            default:
                className = 'table-dark';
                break;
        }

    }


    // console.log( className );

    return className;
};



export const obtenerCorrienteMax = ( tipoMedida ) => {
    // console.log( tipoMedida );
    let value = 0;

    switch ( tipoMedida ) {
        case 'directa':
            value = 100;
            break;
        case 'semi':
            value = 10;
            break;
        case 'indirecta':
            value = 5;
            break;

        default:
            break;
    }

    return value;

};

export const obtenerVoltajeMax = ( elementos ) => {
    // console.log( tipoMedida );
    let value = 0;

    switch ( elementos ) {
        case 2:
            value = 110;
            break;
        case 3:
            value = 69;
            break;

        default:
            break;
    }

    return value;

};


export const obtenerTipoCarga = ( value ) => {

    let tipoCarga;

    if ( value < 0 ) {
        tipoCarga = 'CAPACITIVA';
    } else {
        tipoCarga = 'INDUCTIVA';
    }

    return tipoCarga;

};

