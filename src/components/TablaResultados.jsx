
import { colorDesviacion } from '../helpers/calculos';


const TablaResultados = ( { titulos, data } ) => {


    return (

        <table className="animate__animated animate__fadeInDown table table-striped container">
            <thead>
                <tr>
                    {
                        titulos.map( ( titulo, index ) => (
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
                            {
                                item.base && (
                                    <th scope="row">{ item.base }</th>
                                )
                            }
                            <td className={ `${ colorDesviacion( item.a ) }` }>{ item.a }</td>
                            { item.b &&
                                <td className={ `${ colorDesviacion( item.b ) }` } >{ item.b }</td>
                            }

                            <td className={ `${ colorDesviacion( item.c ) }` }>{ item.c }</td>
                        </tr>
                    ) )
                }

            </tbody>
        </table>
    );
};

export default TablaResultados;
