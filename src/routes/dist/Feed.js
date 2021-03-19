"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Post_1 = require("../components/Post");
function Feed() {
    var _a = react_1.useState(), posts = _a[0], setPosts = _a[1];
    react_1.useEffect(function () {
        getFeed();
    }, []);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Post_1["default"], { text: 'pop' }),
        react_1["default"].createElement(Post_1["default"], { text: 'hello world' }),
        react_1["default"].createElement(Post_1["default"], { text: 'pop' }),
        react_1["default"].createElement(Post_1["default"], { text: 'hello world' })));
    function getFeed() {
    }
}
exports["default"] = Feed;
