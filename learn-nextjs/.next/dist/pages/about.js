'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('/home/proteus-ken/tutorial/nodejs/nextjs/learn-nextjs/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/home/proteus-ken/tutorial/nodejs/nextjs/learn-nextjs/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/home/proteus-ken/tutorial/nodejs/nextjs/learn-nextjs/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/home/proteus-ken/tutorial/nodejs/nextjs/learn-nextjs/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/home/proteus-ken/tutorial/nodejs/nextjs/learn-nextjs/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('/home/proteus-ken/tutorial/nodejs/nextjs/learn-nextjs/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _Nav = require('../components/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Homepage = function (_Component) {
  (0, _inherits3.default)(Homepage, _Component);

  function Homepage() {
    (0, _classCallCheck3.default)(this, Homepage);
    return (0, _possibleConstructorReturn3.default)(this, (Homepage.__proto__ || (0, _getPrototypeOf2.default)(Homepage)).apply(this, arguments));
  }

  (0, _createClass3.default)(Homepage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(_Nav2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'columns' },
          _react2.default.createElement(
            'div',
            { className: 'column' },
            _react2.default.createElement(
              'h1',
              null,
              'About'
            )
          )
        )
      );
    }
  }]);
  return Homepage;
}(_react.Component); // index.js


exports.default = Homepage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Fib3V0LmpzIl0sIm5hbWVzIjpbIkhvbWVwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7OzZCQUNQO0FBQ04sYUFDRTtBQUFBO0FBQUE7QUFDRSw2REFERjtBQUVFLDBEQUZGO0FBR0U7QUFBQTtBQUFBLFlBQUssV0FBVSxTQUFmO0FBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSxRQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBREo7QUFIRixPQURGO0FBV0g7OztxQkFuQkw7OztrQkFNcUJBLFEiLCJmaWxlIjoiYWJvdXQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcHJvdGV1cy1rZW4vdHV0b3JpYWwvbm9kZWpzL25leHRqcy9sZWFybi1uZXh0anMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmRleC5qc1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZXBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkZXIvPlxuICAgICAgICAgICAgPE5hdmJhci8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgPGgxPkFib3V0PC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iXX0=