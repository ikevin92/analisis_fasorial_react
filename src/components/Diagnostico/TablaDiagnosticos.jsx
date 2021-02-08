
const TablaDiagnosticos = ( { data } ) => {

    // console.log( data );

    return (
        <>
            <h2>Diagnosticos</h2>
            <ul className="list-group">

                {
                    data.map( ( item, index ) => (
                        <li className={ `list-group-item ${ item.calificacion === '+' ? 'list-group-item-success' : 'list-group-item-warning' } ` } key={ index }> <span>{ item.tipo }: </span>  {item.desc }</li>
                    ) )
                }

            </ul>

        </>

    );
};

export default TablaDiagnosticos;
