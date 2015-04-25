define(['react'], function (React, CommentBox) {
	// react developer tools require global
	// https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
	window.React = React;
	var data = [{"Author":"Daniel Lo Nigro","Text":"Hello ReactJS.NET World!"},{"Author":"Pete Hunt","Text":"This is one comment"},{"Author":"Jordan Walke","Text":"This is *another* comment"}];

	//loose dependency which could become strict after the build
	//take a look at the Gruntfile `modules` to get the idea
	require(['jsx!CommentBox'], function (CommentBox) {
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
});