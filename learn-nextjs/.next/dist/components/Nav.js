"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("/home/proteus-ken/tutorial/nodejs/nextjs/learn-nextjs/node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _link = require("/home/proteus-ken/tutorial/nodejs/nextjs/learn-nextjs/node_modules/next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navbar = function Navbar() {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "nav",
      { className: "nav has-shadow" },
      _react2.default.createElement(
        "div",
        { className: "container" },
        _react2.default.createElement(
          "div",
          { className: "nav-left" },
          _react2.default.createElement(
            _link2.default,
            { href: "/" },
            _react2.default.createElement(
              "a",
              { className: "nav-item" },
              " Brand "
            )
          ),
          _react2.default.createElement(
            _link2.default,
            { href: "/about" },
            _react2.default.createElement(
              "a",
              { className: "nav-item is-tab is-hidden-mobile" },
              " About Me "
            )
          )
        ),
        _react2.default.createElement(
          "span",
          { className: "nav-toggle" },
          _react2.default.createElement("span", null),
          _react2.default.createElement("span", null),
          _react2.default.createElement("span", null)
        )
      )
    )
  );
}; // Nav.js
exports.default = Navbar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2LmpzIl0sIm5hbWVzIjpbIk5hdmJhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTLFNBQVRBLE1BQVMsR0FBTTtBQUNqQixTQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxRQUFLLFdBQVUsZ0JBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFVBQWY7QUFDRTtBQUFBO0FBQUEsY0FBTSxNQUFLLEdBQVg7QUFDRTtBQUFBO0FBQUEsZ0JBQUcsV0FBVSxVQUFiO0FBQUE7QUFBQTtBQURGLFdBREY7QUFJRTtBQUFBO0FBQUEsY0FBTSxNQUFLLFFBQVg7QUFDRTtBQUFBO0FBQUEsZ0JBQUcsV0FBVSxrQ0FBYjtBQUFBO0FBQUE7QUFERjtBQUpGLFNBREY7QUFTRTtBQUFBO0FBQUEsWUFBTSxXQUFVLFlBQWhCO0FBQ0UscURBREY7QUFFRSxxREFGRjtBQUdFO0FBSEY7QUFURjtBQURGO0FBREosR0FESjtBQXFCSCxDQXRCRCxDLENBSEE7a0JBMkJlQSxNIiwiZmlsZSI6Ik5hdi5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9wcm90ZXVzLWtlbi90dXRvcmlhbC9ub2RlanMvbmV4dGpzL2xlYXJuLW5leHRqcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5hdi5qc1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2IGhhcy1zaGFkb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj4gQnJhbmQgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2Fib3V0Jz5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWl0ZW0gaXMtdGFiIGlzLWhpZGRlbi1tb2JpbGVcIj4gQWJvdXQgTWUgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdi10b2dnbGVcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyIl19