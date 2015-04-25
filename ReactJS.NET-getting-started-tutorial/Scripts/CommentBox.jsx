function __CommentBox(React, CommentList, CommentForm) {
	return React.createClass({
		displayName: "CommentBox",
		loadCommentsFromServer: function () {
			var xhr = new XMLHttpRequest();
			xhr.open('get', this.props.url, true);
			xhr.onload = function () {
				var data = JSON.parse(xhr.responseText);
				this.setState({data: data});
			}.bind(this);
			xhr.send();
		},
		handleCommentSubmit: function (comment) {
			var comments = this.state.data;
			var newComments = comments.concat([comment]);
			this.setState({data: newComments});

			var data = new FormData();
			data.append('Author', comment.Author);
			data.append('Text', comment.Text);

			var xhr = new XMLHttpRequest();
			xhr.open('post', this.props.submitUrl, true);
			xhr.onload = function () {
				this.loadCommentsFromServer();
			}.bind(this);
			xhr.send(data);
		},
		getInitialState: function () {
			return {data: this.props.initialData};
		},
		componentDidMount: function () {
			window.setInterval(this.loadCommentsFromServer, this.props.pollInterval);
		},
		render: function () {
			return (
				<div className="commentBox">
					<h1>Comments</h1>
					<CommentList data={this.state.data}/>
					<CommentForm onCommentSubmit={this.handleCommentSubmit}/>
				</div>
			);
		}
	});
}

// if server-side
if (typeof window === 'undefined' && typeof process === 'undefined') {
	var CommentBox = __CommentBox(React, CommentList, CommentForm);
} else {
	define(
		['react', 'jsx!CommentList', 'jsx!CommentForm'],
		function (React, CommentList, CommentForm) {
			return __CommentBox(React, CommentList, CommentForm);
		}
	);
}