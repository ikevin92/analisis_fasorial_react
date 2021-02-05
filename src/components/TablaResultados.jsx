


const TablaResultados = ( { titulos, data } ) => {


    console.log( "DATA TABLE;", data );

    return (

        <table className="table table-striped container">
            <thead>
                <tr>
                    {
                        titulos.voltajes.map( ( titulo, index ) => (
                            <th scope="col" key={ index }>{ titulo }</th>
                        ) )
                    }

                </tr>
            </thead>
            <tbody>
                {
                    data.map( ( item, index ) => (
                        <tr key={ index }>
                            <th scope="row">{ item.desc }</th>
                            <th scope="row">{ item.base }</th>
                            <td>{ item.a }%</td>
                            { item.b &&
                                <td>{ item.b }%</td>
                            }

                            <td>{ item.c }%</td>
                        </tr>
                    ) )
                }

            </tbody>
        </table>
    );
};

export default TablaResultados;
