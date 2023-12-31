import React, { Component } from 'react';
import Table from './Table';

class Card extends Component {
    constructor(props) {
        super(props);
        this.triggerCalculated = this.triggerCalculated.bind(this);
    }
    render() {
        return (
            <div className="card accordion-item mb-1">
                <div className="card-header">
                    <button 
                        className="bg bg-skobe text-white accordion-button" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapse-form" 
                        aria-expanded="true" 
                        aria-controls="collapse-form"
                    >
                        Call Centre Erlang Calculator
                    </button>
                </div>
                <div id="collapse-form" className={ `card-body accordion-collapse collapse ${ this.props.visible && 'show' }`}>
                    <div id="card-form">
                        <p className="card-text pb-2 border-bottom">Set fields to calculate staff numbers required to reach an agreed service level.</p>
                        <Table triggerCalculated={ (evt, data) => this.triggerCalculated(evt, data) } />
                    </div>
                </div>
            </div>
        );
    };
    triggerCalculated(evt, data) {
        this.props.calculate(data);
        this.props.showResults();
    }
}

export default Card;