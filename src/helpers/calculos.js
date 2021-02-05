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


    const promedio = ( suma / datos.length ).toFixed( 2 );

    return promedio;
};

const objectToArray = ( object ) => {
    let data = [];

    for ( const prop in object ) {
        object[ prop ] = parseFloat( object[ prop ] );
        console.log( `${ prop }: ${ object[ prop ] }` );

        data.push( object[ prop ] );

    }
    return data;

};

export const calculosFases = ( data ) => {
    console.log( "fases: ", data );
};

export const calcularDesbalance = ( base, valor ) => {
    // console.log( base, valor );
    // const desbalance = base / valor;
    let res = ( valor / base );

    res = res * 100;

    res = 100 - res;

    const desbalance = res.toFixed( 2 );

    console.log( "DESBALANCE: ", desbalance );

    return desbalance;
};


export const calculosTotales = ( bases, valores ) => {
    console.log( "bases: ", bases );
    console.log( "valores: ", valores );
    let resultados = [];
    let value = '';


    console.log( "valores: ", valores );

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
            console.log( value );

            temp[ value ] = calcularDesbalance( bases[ b ], valores[ v ] );
        }

        resultados.push( {
            ...temp
        } );

    }

    console.log( "resultados totales: ", resultados );


    return resultados;
};

