function __CommentList(React, Comment) {
	return React.createClass({
		render: function () {
			var commentNodes = this.props.data.map(function (comment) {
				return (
					<Comment author={comment.Author}>
						{comment.Text}
					</Comment>
				);
			});
			return (
				<div className="commentList">
					{commentNodes}
				</div>
			);
		}
	});
}

// if server-side
if (typeof window === 'undefined' && typeof process === 'undefined') {
	var CommentList = __CommentList(React, Comment);
} else {
	define(['react', 'jsx!Comment'], function (React, Comment) {
		return __CommentList(React, Comment);
	});
}