import React, { Fragment } from 'react';

const Stats = (props) => {

    const getPorcentagem = (now) => {
        const max = 255;
        const min = 1;
        const percentage = ((now - 1) / (max - min)) * 100;
        return Math.round(percentage)
    } 

    const stats = props.stats.map(elem => {
        const stat = { value: elem.base_stat, name: elem.stat.name }
        return (
            <div key={stat.name} className="row">
                <div className="col-3">
                    {stat.name}
                </div>
                <div className="col-9">
                    <div className="progress">
                        <div 
                            className="progress-bar" 
                            style={{backgroundColor: `${props.color}`, width: `${getPorcentagem(stat.value)}%`}} 
                            role="progressbar"
                            aria-valuenow={stat.value}
                            aria-valuemin="1"
                            aria-valuemax="255"
                            >
                            {stat.value}
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <Fragment>
            {stats}
        </Fragment>
    );

}
export default Stats;
