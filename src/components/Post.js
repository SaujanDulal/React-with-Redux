import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions';

class Post extends Component {
	handleClick = () => {
		this.props.deletePost(this.props.post.id);
		// re-direct the user after deleting the post which is home
		this.props.history.push('/');
	};
	render() {
		console.log(this.props);
		const post = this.props.post ? (
			<div className="post">
				<h4 className="center">{this.props.post.title}</h4>
				<p>{this.props.post.body}</p>
				<div className="center">
					<button className="btn grey" onClick={this.handleClick}>
						Delete Post
					</button>
				</div>
			</div>
		) : (
			<div className="center">Loading post...</div>
		);
		return <div className="container">{post}</div>;
	}
}

// ownProps has got info that route provides like params and id
const mapStateToProps = (state, ownProps) => {
	let id = ownProps.match.params.post_id;
	return {
		post: state.posts.find((post) => post.id === id)
	};
};

// store.dispatch({tye:....}) we are passing this method from store inside parameter
const mapDispatchToProps = (dispatch) => {
	// this object represent different properties and methods we want to add to this component props
	return {
		deletePost: (id) => {
			// we are dispatching this action whenever we call deletePost(id) and
			// will eventually be sent to rootReducer as a action
			dispatch(deletePost(id));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
