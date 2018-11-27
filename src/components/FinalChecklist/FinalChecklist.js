import React, {Component} from 'react';
import {connect} from 'react-redux';

class FinalChecklist extends Component {

    render () {
        return (
            <div>
                FinalChecklist
            </div>
        )
    }
}

function mapStateToProps (state) {
    const {user} = state
    return {
        user
    }
}

export default connect(mapStateToProps, {})(FinalChecklist);