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

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// error.js
var Error = function (_Component) {
  (0, _inherits3.default)(Error, _Component);

  function Error() {
    (0, _classCallCheck3.default)(this, Error);
    return (0, _possibleConstructorReturn3.default)(this, (Error.__proto__ || (0, _getPrototypeOf2.default)(Error)).apply(this, arguments));
  }

  (0, _createClass3.default)(Error, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'message is-info' },
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'message-header' },
          _react2.default.createElement(
            'p',
            null,
            'Error'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'message-body' },
          _react2.default.createElement(
            'p',
            null,
            this.props.statusCode ? 'An error ' + this.props.statusCode + ' occurred on server' : 'An error occurred on client'
          )
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          xhr = _ref.xhr;

      var statusCode = res ? res.statusCode : xhr ? xhr.status : null;
      return { statusCode: statusCode };
    }
  }]);
  return Error;
}(_react.Component);

exports.default = Error;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19lcnJvci5qcyJdLCJuYW1lcyI6WyJFcnJvciIsInByb3BzIiwic3RhdHVzQ29kZSIsInJlcyIsInhociIsInN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFGQTtJQUlxQkEsSzs7Ozs7Ozs7Ozs2QkFNVDtBQUNSLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxpQkFBZjtBQUNFLDZEQURGO0FBRUU7QUFBQTtBQUFBLFlBQUssV0FBVSxnQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixTQUZGO0FBS0U7QUFBQTtBQUFBLFlBQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsaUJBQUtDLEtBQUwsQ0FBV0MsVUFBWCxpQkFDYyxLQUFLRCxLQUFMLENBQVdDLFVBRHpCLDJCQUVFO0FBSEo7QUFERjtBQUxGLE9BREY7QUFlRDs7OzBDQXJCcUM7QUFBQSxVQUFaQyxHQUFZLFFBQVpBLEdBQVk7QUFBQSxVQUFQQyxHQUFPLFFBQVBBLEdBQU87O0FBQ3BDLFVBQU1GLGFBQWFDLE1BQU1BLElBQUlELFVBQVYsR0FBd0JFLE1BQU1BLElBQUlDLE1BQVYsR0FBbUIsSUFBOUQ7QUFDQSxhQUFPLEVBQUVILHNCQUFGLEVBQVA7QUFDRDs7Ozs7a0JBSmtCRixLIiwiZmlsZSI6Il9lcnJvci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9wcm90ZXVzLWtlbi90dXRvcmlhbC9ub2RlanMvbmV4dGpzL2xlYXJuLW5leHRqcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGVycm9yLmpzXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKHsgcmVzLCB4aHIgfSkge1xuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXMgPyByZXMuc3RhdHVzQ29kZSA6ICh4aHIgPyB4aHIuc3RhdHVzIDogbnVsbClcbiAgICByZXR1cm4geyBzdGF0dXNDb2RlIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZSBpcy1pbmZvXCI+XG4gICAgICAgIDxIZWFkZXIvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtaGVhZGVyXCI+XG4gICAgICAgICAgPHA+RXJyb3I8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtYm9keVwiPlxuICAgICAgICAgIDxwPntcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc3RhdHVzQ29kZVxuICAgICAgICAgICAgPyBgQW4gZXJyb3IgJHt0aGlzLnByb3BzLnN0YXR1c0NvZGV9IG9jY3VycmVkIG9uIHNlcnZlcmBcbiAgICAgICAgICAgIDogJ0FuIGVycm9yIG9jY3VycmVkIG9uIGNsaWVudCdcbiAgICAgICAgICB9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSJdfQ==