import React from 'react';

let ErrorModal = React.createClass({
    getDefaultProps: function () {
        return {
            title: "Error"
        };
    },
    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },
    componentDidMount: function () {
        let modal = new Foundation.Reveal($("#error-modal"));
        modal.open();
    },
    render: function () {
        let {title, message} = this.props;
        return (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4 className="title">{title}</h4>
                <p className="error-message">{message}}</p>
                <button className="button hollow" data-close="">OK</button>
            </div>
        );
    }
});

export default ErrorModal;