import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';
import { connect } from 'react-redux';

class Home extends Component {
	render() {
		// console.log(this.props);
		const { posts } = this.props;
		const postList = posts.length ? (
			posts.map((post) => {
				return (
					<div className="post card" key={post.id}>
						<img src={Pokeball} alt="a pokeball" />
						<div className="card-content">
							<Link to={`/${post.id}`}>
								<span className="card-title red-text">{post.title}</span>
							</Link>
							<p>{post.body}</p>
						</div>
					</div>
				);
			})
		) : (
			<div className="center">No post yet</div>
		);
		return (
			<div>
				<div className="container home">
					<h4 className="center">Home</h4>
					<p>{postList}</p>
				</div>
			</div>
		);
	}
}

// get data from central store
const mapStateToProps = (state) => {
	// this object represent different properties we want to add to the props
	return {
		posts: state.posts
	};
};

// we pass mapStateToProps coz when we connect to redux, it knows
// what data we want to grab from redux	eg posts, and  properties
//  that we want to create in our props object to apply that data to
export default connect(mapStateToProps)(Home);
