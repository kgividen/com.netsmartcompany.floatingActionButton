var args = arguments[0] || {};

var WIDTH = 60,
	HEIGHT = 60;

var widget = {
		top: _.has(args, 'top') ? args.top : null,
		right: _.has(args, 'right') ? args.right : null,
		bottom: _.has(args, 'bottom') ? args.bottom : null,
		left: _.has(args, 'left') ? args.left : null,
		width: _.has(args, 'width') ? args.width : WIDTH,
		height: _.has(args, 'height') ? args.height : HEIGHT
	},
	circle = {
		width: _.has(args, 'width') ? args.width : WIDTH,
		height: _.has(args, 'height') ? args.height : HEIGHT,
		borderRadius: _.has(args, 'width') ? args.width / 2 : WIDTH / 2,
		borderWidth: _.has(args, 'width') ? args.width / 2 : WIDTH / 2,
		borderColor: _.has(args, 'backgroundColor') ? args.backgroundColor : '#ccfafafa'
	},
	title = {
		width: _.has(args, 'width') ? args.width : WIDTH,
		height: _.has(args, 'height') ? args.height : HEIGHT,
		text: _.has(args, 'title') ? args.title : '',
		color: _.has(args, 'color') ? args.color : '#808080',
		font: _.has(args, 'font') ? args.font : {},
		textAlign: _.has(args, 'textAlign') ? args.textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
		verticalAlign: _.has(args, 'verticalAlign') ? args.verticalAlign : Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER
	};

$.widget.applyProperties(widget);
$.circle.applyProperties(circle);
$.title.applyProperties(title);

if (args.hidden) {
	$.widget.hide();
	$.circle.hide();
	$.title.hide();	
}
// This will hold our callback
var onClickCallback;

// The button has been clicked, call callback
function buttonClicked(e) {
	if(typeof(onClickCallback) === 'function') {
		onClickCallback();
	}
}

// Assign our callback
function onClick(callback) {
	onClickCallback = callback;
}

// Make the onClick function public
exports.onClick = onClick;

exports.applyProperties = function (props) {
	$.widget.applyProperties(props);
};

exports.hideMe = function () {
	$.widget.hide();
	$.circle.hide();
	$.title.hide();
};

exports.showMe = function () {
	$.widget.show();
	$.circle.show();
	$.title.show();
};