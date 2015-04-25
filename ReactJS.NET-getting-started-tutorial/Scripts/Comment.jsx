function __Comment(React) {
	return React.createClass({
		render: function () {
			var converter = new Showdown.converter();
			var rawMarkup = converter.makeHtml(this.props.children.toString());
			return (
				<div className="comment">
					<h2 className="commentAuthor">
						{this.props.author}
					</h2>
					<span dangerouslySetInnerHTML={{__html: rawMarkup}}/>
				</div>
			);
		}
	});
}

// if server-side
if (typeof window === 'undefined' && typeof process === 'undefined') {
	var Comment = __Comment(React);
} else {
	define(['react', 'showdown'], function (React) {
		return __Comment(React);
	});
}