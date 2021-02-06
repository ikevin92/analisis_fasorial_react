

export const obtenerEncabezados = ( elementos ) => {
    let encabezado = {};

    switch ( elementos ) {
        case 2:
            encabezado = {
                voltajes: [ 'DESC', 'BASE', 'VLA', 'VLC' ],
                corrientes: [ 'DESC', 'BASE', 'IA', 'IC' ],
                angulos: [ 'DESC', 'IA°', 'IC°', ],
            };
            break;
        case 3:
            encabezado = {
                voltajes: [ 'DESC', 'BASE', 'VLA', 'VLB', 'VLC' ],
                corrientes: [ 'DESC', 'BASE', 'IA', 'IB', 'IC' ],
                angulos: [ 'DESC', 'IA°', 'IB°', 'IC°', ],
            };
            break;

        default:
            break;
    }

    // console.log( encabezado );

    return encabezado;
};

export const obtenerDescripcion = ( descripcion ) => {
    // console.log( descripcion );
    let value = '';

    switch ( descripcion ) {
        case 'promedio':
            value = 'DESBALANCE PROM';
            break;
        case 'max':
            value = 'DESBALANCE MAX';
            break;
        case 'min':
            value = 'DESBALANCE MIN';
            break;

        default:
            break;
    }

    return value;

};

