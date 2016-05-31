import React from 'react';
import ReactDOM from 'react-dom';
import Dat, { DatString, DatNumber, DatBoolean, DatButton } from '../../src/Dat.jsx';

require('../../src/Dat.scss');

class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state ={
            flashCounter: 0,
            data: {
                string: 'Hello World',
                number: 66,
                boolean: false,
            },
        }
    }

    handleUpdate(data) {
        this.setState({ data });
    }

    handleClick() {
        clearInterval(this.iv);
        this.setState({ flashCounter: 0 });
        this.iv = setInterval(() => {
            let flashCounter = this.state.flashCounter + 1;
            if (flashCounter === 20) {
                clearInterval(this.iv);
                flashCounter = 0;
            }
            this.setState({ flashCounter });
        }, 30);
    }

    render() {
        const { data, color, flashCounter } = this.state;
        const style = { color: '#' + (flashCounter ? Math.floor(Math.random() * 16777215).toString(16) : 'fff') }
        return (
            <div>
                <pre style={style}>{JSON.stringify(data, null, 2)}</pre>
                <Dat data={data} onUpdate={this.handleUpdate}>
                    <DatString path="string" label="String" />
                    <DatNumber path="number" label="Number" min={0} max={100} step={1} />
                    <DatBoolean path="boolean" label="Boolean" />
                    <DatButton label="Button" onClick={this.handleClick} />
                </Dat>
            </div>
        );
    }

}

ReactDOM.render(
    <App />,
    document.querySelector('#app')
);
