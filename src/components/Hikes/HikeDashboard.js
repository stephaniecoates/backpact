import React, {Component} from 'react';
import HikeList from './HikeList';
import {connect} from 'react-redux';

class HikeDashboard extends Component {

    render () {
        return (
            <div>
                HikeDashboard
                <HikeList />
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

export default connect(mapStateToProps, {})(HikeDashboard);