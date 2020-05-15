'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MenuLevel = require('./MenuLevel');

var _MenuLevel2 = _interopRequireDefault(_MenuLevel);

require('../less/Menu.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Меню
 *
 * props.ruleForCompare - правило для разрешения отображения
 *    Строка
 *
 * props.menu
 *    Ключи объекта menu
 *
 * - showType
 *    view - блок всегда отображается (для level1)
 *
 * - className default="", использование пользовательских стилей для отображения
 *
 * - data : [] - массив объектов
 *    Ключи объектов:
 *
 *    label надпись
 *
 *    href
 *        String строка - ссылка
 *        false, "", не указана - элемент не кликабельный
 *
 *    isDisabled - не будет работать ссылка по этому элементу
 *          А подменю - все равно будет показываться
 *        false (default) - элемент доступен
 *        true - элементы не кликабельный, серый
 *
 *    rules : []
 *        массив строк - правил. Разрешает отображение элемента (вместе с children)
 *        если одна из строк совпадёт со строкой из ruleForCompare
 *
 *    children : {}
 *        showType тип события для отображения блока дочерних элементов
 *            click - по клику
 *            hover - по наведению
 *            view - блок всегда отображается
 *            hide - блок всегда скрыт
 *        data : []
 *
 * Блоки className для стилей
 *    Меню может быть вложеным. Каждый последующий уровень помечается маркером className=level1, level2....
 */
var Menu = function (_React$Component) {
    _inherits(Menu, _React$Component);

    function Menu(props) {
        _classCallCheck(this, Menu);

        var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

        _this.state = {};

        if (!_this.props.menu) {
            console.error('Menu: отсутствует обязательный атрибут props.menu');
        }
        return _this;
    }

    _createClass(Menu, [{
        key: 'render',
        value: function render() {
            var menu = this.props.menu;

            if (menu) {
                return _react2.default.createElement(
                    'div',
                    { className: "Menu stretch_" + this.stretch },
                    _react2.default.createElement(_MenuLevel2.default, {
                        menu: menu,
                        level: 1,
                        ruleForCompare: this.props.ruleForCompare
                    })
                );
            } else {
                return null;
            }
        }
    }]);

    return Menu;
}(_react2.default.Component);

exports.default = Menu;
