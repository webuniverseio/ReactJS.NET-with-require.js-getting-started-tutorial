define(['react', 'jsx!CommentBox'], function (React, CommentBox) {
	var data = [{"Author":"Daniel Lo Nigro","Text":"Hello ReactJS.NET World!"},{"Author":"Pete Hunt","Text":"This is one comment"},{"Author":"Jordan Walke","Text":"This is *another* comment"}];

	React.render(
		React.createElement(CommentBox, {
			initialData: data,
			url: "/comments",
			pollInterval: 2000,
			submitUrl: "/comments/new"
		}),
		document.getElementById('react1')
	);
});