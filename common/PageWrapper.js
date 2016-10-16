import React, {Component, PropTypes} from 'react';

class PageWrapper extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div id="pageWrapper">
                <div id="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default PageWrapper;