
import { colorDesviacion } from '../helpers/calculos';


const TablaResultados = ( { titulos, data } ) => {



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
                            <td className={`${colorDesviacion(item.a)}`}>{ item.a }%</td>
                            { item.b &&
                                <td className={ `${ colorDesviacion( item.b ) }` } >{ item.b }%</td>
                            }

                            <td className={ `${ colorDesviacion( item.c ) }` }>{ item.c }%</td>
                        </tr>
                    ) )
                }

            </tbody>
        </table>
    );
};

export default TablaResultados;
