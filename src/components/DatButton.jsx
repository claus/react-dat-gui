import React, { PropTypes } from 'react';

class DatButton extends React.Component {

    static propTypes = {
        label: PropTypes.string,
        onClick: PropTypes.func,
    };

    constructor(props, context) {
        super(props, context);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
    }

    render() {
        const { label } = this.props;
        return (
            <li className="cr button">
                <span onClick={this.props.onClick}>{label}</span>
            </li>
        );
    }

}

export default DatButton;
