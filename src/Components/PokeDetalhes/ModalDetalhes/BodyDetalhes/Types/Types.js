import React from 'react';
import StringFormatter from '../../../../../Utils/StringFormatter';
import './Types.css';

const Types = (props) => {

    const types = props.types.sort((a, b) => {
        if (a.slot > b.slot) {
            return 1;
        }
        if (a.slot < b.slot) {
            return -1;
        }
        return 0;
    }).map(type => {
        return (
            <h5 className="pl-2 pr-2" key={type.type.name}>
                <span className={`badge badge-pill ${type.type.name}`}>
                    {StringFormatter.capitalize(type.type.name)}
                </span>
            </h5>
        );
    });

    return (
        <div className="d-flex justify-content-center">
            {types}                                        
        </div>
    );
}
export default Types;
