import React from 'react';
import ReactDOM from 'react-dom';
import Dat, { DatString, DatNumber } from '../../src/Dat.jsx';

require('../../src/Dat.scss');

class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.state ={
            data: {
                name: 'Claus',
                age: 48
            }
        }
    }

    handleUpdate(data) {
        this.setState({ data });
    }

    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
                <Dat data={this.state.data} onUpdate={this.handleUpdate}>
                    <DatString path="name" label="Name" />
                    <DatNumber path="age" label="Age" min={0} max={100} step={1} />
                </Dat>
            </div>
        );
    }

}

ReactDOM.render(
    <App />,
    document.querySelector('#app')
);
