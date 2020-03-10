import React, { Component } from 'react';
import ApiService from '../../../../Service/ApiService';
import './Evolution.css';

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
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-md-6">
                        <div className="card-body card-evolution">
                            <h5 className="card-title">Evolves from:</h5>
                            <p className="card-text">{this.state.fromName}</p>
                        </div>
                    </div>
                    <div className="col-md-6 align-self-center">
                        <img className="sprite-evolution" src={this.state.fromImgUrl} alt={""} />
                    </div>
                </div>
            </div>
                );
            }
        
        }
export default Evolution;