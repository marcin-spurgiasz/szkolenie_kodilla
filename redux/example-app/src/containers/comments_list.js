import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from './comment';

class CommentsList extends Component {
    render() {
        const {comments} = this.props;
        if (!comments) {
            return <div>Loading...</div>
        }
        const commentsList = comments.map((comment) => {
            return (
                <Comment key={comment.id} {...comment} />
            );
        });
        return (
            <ul>{commentsList}</ul>
        );
    }
}    

const mapStateToProps = ({comments}) => {
    return {
        comments
    }
}

export default connect(mapStateToProps)(CommentsList);