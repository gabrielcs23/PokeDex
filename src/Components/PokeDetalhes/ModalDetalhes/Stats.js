import React, { Fragment } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

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
                    <OverlayTrigger
                        placement={'top'}
                        overlay={
                            <Tooltip id={`tooltip-${stat.name}`}>
                                <b>{stat.value}</b>
                            </Tooltip>
                        }
                    >
                        <div className="progress">
                            <div
                                className="progress-bar"
                                style={{ backgroundColor: `${props.color}`, width: `${getPorcentagem(stat.value)}%`, opacity: "0.7" }}
                                role="progressbar"
                                aria-valuenow={stat.value}
                                aria-valuemin="1"
                                aria-valuemax="255"
                            >
                                <b>{stat.value}</b>
                            </div>
                        </div>
                    </OverlayTrigger>
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
