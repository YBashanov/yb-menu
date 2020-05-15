'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _callbackQa = require('callback-qa');

var _callbackQa2 = _interopRequireDefault(_callbackQa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuLevel = function (_CallbackComponent) {
    _inherits(MenuLevel, _CallbackComponent);

    function MenuLevel(props) {
        _classCallCheck(this, MenuLevel);

        var _this = _possibleConstructorReturn(this, (MenuLevel.__proto__ || Object.getPrototypeOf(MenuLevel)).call(this, props));

        _this.state = {
            isShow: false
        };
        _this.callbacks = [];

        _this.outerClick = _this.outerClick.bind(_this);

        _this.setCallbacks(props.callbacks, ["$show"]);
        return _this;
    }

    _createClass(MenuLevel, [{
        key: 'outerClick',


        /**
         * Реализация внешнего клика (по item)
         * Требуется по этому клику вызвать событие show во внутреннем, дочернем блоке
         */
        value: function outerClick(i) {
            if (this.callbacks[i] && this.callbacks[i].$show) {
                this.callbacks[i].$show();
            }
        }

        /**
         * Событие во внутреннем блоке, вызываемое извне
         */

    }, {
        key: '$show',
        value: function $show() {
            this.state.isShow = !this.state.isShow;
            this.setState(this.state);
        }

        /**
         * level level_3 showType_hover isShow_true className
         */

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var menu = this.props.menu;

            if (!menu.showType) {
                menu.showType = "view";
            }

            if (menu.data && menu.data.length) {
                var divClassName = "level level_" + this.props.level + " showType_" + menu.showType + " isShow_" + this.state.isShow + " " + menu.className;

                return _react2.default.createElement(
                    'div',
                    { className: divClassName },
                    _react2.default.createElement(
                        'div',
                        { className: 'wings leftWing' },
                        '\xA0'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'wings rightWing' },
                        '\xA0'
                    ),
                    menu.data.map(function (item, i) {
                        if (!_this2.callbacks[i]) {
                            _this2.callbacks[i] = {};
                        }

                        var isGood = false;

                        // если правила указаны, они касаются item и его children
                        if (item.rules) {
                            // сравниваем со сквозным правилом.
                            // Если ruleForCompare совпадает хотя бы с одним rules - показываем

                            for (var _i = 0; _i < item.rules.length; _i++) {
                                if (item.rules[_i] == _this2.props.ruleForCompare) {
                                    isGood = true;
                                }
                            }
                        }
                        // если item.rules нет, то всё ок
                        else {
                                isGood = true;
                            }

                        if (isGood) {
                            return _react2.default.createElement(
                                'div',
                                { className: 'item', key: i, onClick: function onClick() {
                                        return _this2.outerClick(i);
                                    } },
                                _react2.default.createElement(
                                    'div',
                                    { className: "label isDisabled_" + item.isDisabled },
                                    !item.isDisabled && item.href && _react2.default.createElement(
                                        'a',
                                        { href: item.href },
                                        item.label
                                    ),
                                    !item.isDisabled && !item.href && _react2.default.createElement(
                                        _react2.default.Fragment,
                                        null,
                                        item.label
                                    ),
                                    item.isDisabled && _react2.default.createElement(
                                        _react2.default.Fragment,
                                        null,
                                        item.label
                                    )
                                ),
                                item.children && _react2.default.createElement(MenuLevel, {
                                    menu: item.children,
                                    level: _this2.props.level + 1,
                                    ruleForCompare: _this2.props.ruleForCompare,
                                    callbacks: _this2.callbacks[i]
                                })
                            );
                        } else {
                            return null;
                        }
                    })
                );
            } else return null;
        }
    }]);

    return MenuLevel;
}(_callbackQa2.default);

exports.default = MenuLevel;
