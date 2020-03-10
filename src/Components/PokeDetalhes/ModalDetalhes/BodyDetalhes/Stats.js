import React from 'react';
import StringFormatter from '../../../../Utils/StringFormatter';

const Stats = (props) => {

    const bodyRows = props.stats.map(elem => {
        const stat = { value: elem.base_stat, name: elem.stat.name };
        return (
            <tr key={stat.name}>
                <th scope="row">{StringFormatter.capitalize(stat.name)}</th>
                <td>{stat.value}</td>
            </tr>
        );
    });

    return (
        <div className="container">
            <table className="table table-borderless table-hover">
                <thead>
                    <tr>
                        <th></th>
                        <th scope="col">Base Stats</th>
                    </tr>
                </thead>
                <tbody>
                    {bodyRows}
                </tbody>
            </table>
        </div>
    );

}
export default Stats;
