import React, { Component } from 'react';
import ApiService from '../../../../../Service/ApiService';
import './Evolution.css';
import StringFormatter from '../../../../../Utils/StringFormatter';

class Evolution extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fromName: props.evolvesFrom.name,
            fromUrl: props.evolvesFrom.url,
            fromImgUrl: ''
        };
    }

    componentDidMount() {
        ApiService.getSpriteUrlFromSpecies(this.state.fromUrl)
            .then(spriteUrl => this.setState({
                fromName: this.state.fromName,
                fromUrl: this.state.fromUrl,
                fromImgUrl: spriteUrl
            }));
    }

    render() {
        return (
            <div className="d-flex">
                <div className="card mx-auto">
                    <div className="row no-gutters">
                        <div className="col-12 col-md-6">
                            <div className="card-body card-evolution">
                                <h5 className="card-title">Evolves from:</h5>
                                <p className="card-text">{StringFormatter.capitalize(this.state.fromName)}</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <img className="sprite-evolution" src={this.state.fromImgUrl} alt={""} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
        
}
export default Evolution;