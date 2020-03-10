import React, { Component } from 'react';
import ApiService from '../../../../../Service/ApiService';
import './Evolution.css';
import StringFormatter from '../../../../../Utils/StringFormatter';

class Evolution extends Component {
    constructor(props) {
        super(props);
        this.state = {
            from: {
                name: props.evolvesFrom.name,
                url: props.evolvesFrom.url,
                imgUrl: '',
                id: ''
            }
        };
    }

    componentDidMount() {
        ApiService.getSpriteAndIdUrlFromSpecies(this.state.from.url)
            .then(res => this.setState({
                from: {
                    name: this.state.from.name,
                    url: this.state.from.url,
                    imgUrl: res.spriteUrl,
                    id: res.id
                }
            }));
    }

    render() {
        return (
            <div className="d-flex">
                <div className="card mx-auto">
                    <div className="row no-gutters">
                        <div className="col-12 col-md-7">
                            <div className="card-body card-evolution">
                                <h5 className="card-title">Evolves from:</h5>
                                <p className="card-text">
                                    {StringFormatter.capitalize(this.state.from.name)} #{this.state.from.id}
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-5">
                            <img className="sprite-evolution" src={this.state.from.imgUrl} alt={""} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
        
}
export default Evolution;