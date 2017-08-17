import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { thumbUpComment, thumbDownComment } from '../actions/actions';

class Comment extends Component {
    render() {
        const {text, votes, id, thumbUpComment, thumbDownComment} = this.props;
        return (
            <li>
                <span>{text}</span><br />
                <span> votes: {votes} </span>
                <button onClick={() => thumbUpComment(id)}>Thumb up</button>
                <button onClick={() => thumbDownComment(id)}>Thumb down</button>
            </li>
        );     
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ thumbUpComment, thumbDownComment }, dispatch);
};

export default connect(null, mapDispatchToProps)(Comment);