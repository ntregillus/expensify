'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('App.js is running2.');

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = { options: ['Thing 1', 'Thing 2', 'Thing 3'] };
        _this.removeAll = _this.removeAll.bind(_this);
        _this.chooseRando = _this.chooseRando.bind(_this);
        _this.addOption = _this.addOption.bind(_this);
        _this.removeOption = _this.removeOption.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'removeAll',
        value: function removeAll() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'removeOption',
        value: function removeOption(option) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (item) {
                        return option != item;
                    })
                };
            });
        }
    }, {
        key: 'addOption',
        value: function addOption(option) {
            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            });
        }
    }, {
        key: 'chooseRando',
        value: function chooseRando() {
            var i = Math.floor(Math.random() * this.state.options.length);

            var randomOption = this.state.options[i];
            alert(randomOption);
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'Indecision';
            var subtitle = 'Put your life in the handles of a computer';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, { subtitle: subtitle, handleChooseButton: this.chooseRando }),
                React.createElement(Options, { options: this.state.options, handleRemoveAll: this.removeAll, handleRemoveOption: this.removeOption }),
                React.createElement(AddOption, { handleAddOption: this.addOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleChooseButton },
            'What should I do?'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            (props.options || []).map(function (i) {
                return React.createElement(Option, { key: i, value: i, handleRemoveOption: props.handleRemoveOption });
            })
        )
    );
};
var Option = function Option(props) {
    return React.createElement(
        'li',
        null,
        props.value,
        React.createElement(
            'button',
            { onClick: function onClick() {
                    return props.handleRemoveOption(props.value);
                } },
            'remove'
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            if (option) {
                this.props.handleAddOption(option);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'form',
                { onSubmit: this.handleAddOption },
                React.createElement('input', { type: 'text', name: 'option' }),
                React.createElement(
                    'button',
                    null,
                    'Add Option'
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
