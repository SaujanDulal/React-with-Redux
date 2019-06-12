// action creator- it makes action re-usable
export const deletePost = (id) => {
	return {
		type: 'DELETE_POST',
		id
	};
};
