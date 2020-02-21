"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var React=require("react"),React__default=_interopDefault(React);function _typeof(e){"@babel/helpers - typeof";return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread2(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){_defineProperty(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}function _objectWithoutProperties(e,t){if(null==e)return{};var r,n,o=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}var EnhancedProvider=function(e,t,r){return function(n){function o(t){var n;return _classCallCheck(this,o),(n=_possibleConstructorReturn(this,_getPrototypeOf(o).call(this,t))).state=t.initialState||r,e(_assertThisInitialized(n)),n}return _inherits(o,React__default.Component),_createClass(o,[{key:"render",value:function(){return React__default.createElement(t,{value:this.state},this.props.children)}}]),o}()},Prevent=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments))}return _inherits(t,React.PureComponent),_createClass(t,[{key:"render",value:function(){var e=this.props;return(0,e.renderComponent)(_objectWithoutProperties(e,["renderComponent"]))}}]),t}(),connect=function(e){return function(t){return function(r){var n=function(e){return React.createElement(r,e)},o=function(r){return React.createElement(e,null,function(e){var o=t(e||{},r);return React.createElement(Prevent,_extends({renderComponent:n},r,o))})};return o.displayName="Connect(".concat(r.displayName||r.name||"Unknown",")"),r.getInitialProps&&(o.getInitialProps=r.getInitialProps),o}}},Subscriptions=function e(){var t=this;_classCallCheck(this,e),_defineProperty(this,"subscriptions",[]),_defineProperty(this,"getSubscriptions",function(){return t.subscriptions}),_defineProperty(this,"subscribe",function(e){t.subscriptions=[].concat(_toConsumableArray(t.subscriptions),[e])}),_defineProperty(this,"unsubscribe",function(e){t.subscriptions=t.subscriptions.filter(function(t){return t!==e})})},id$1=0,devtools=function(e,t){var r=e.initialState,n=window.__REDUX_DEVTOOLS_EXTENSION__,o=id$1;id$1+=1;var i="react-waterfall - ".concat(o),a=n.connect({name:i,features:{jump:!0}});return a.subscribe(function(e){switch(e.type){case"START":a.init(r);break;case"RESET":t.setState(r);break;case"DISPATCH":switch(e.payload.type){case"JUMP_TO_STATE":case"JUMP_TO_ACTION":t.setState(JSON.parse(e.state))}}}),function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];a.send(_objectSpread2({type:e},n),t.state,{},o)}},defaultMiddlewares="undefined"!=typeof window&&window.devToolsExtension?[devtools]:[],createStore=function(e){var t,r=e.initialState,n=e.actionsCreators,o=void 0===n?{}:n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=React.createContext(),c=new Subscriptions,s=c.getSubscriptions,u=c.subscribe,f=c.unsubscribe,l=r,p=function(e,r){for(var n=arguments.length,o=new Array(n>2?n-2:0),i=2;i<n;i++)o[i-2]=arguments[i];return void 0===r?Promise.resolve():(l=_objectSpread2({},l,{},r),new Promise(function(n){s().forEach(function(t){return t.apply(void 0,[e,r].concat(o))}),t.setState(l,function(){t.initializedMiddlewares.forEach(function(t){return t.apply(void 0,[e].concat(o))}),n()})}))},y=Object.keys(o).reduce(function(e,r){return _objectSpread2({},e,_defineProperty({},r,function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];if(t){var a=o[r].apply(o,[l,y].concat(n));return"object"===_typeof(a)&&a.then?a.then(function(e){return p.apply(void 0,[r,e].concat(n))}):p.apply(void 0,[r,a].concat(n))}console.error("<Provider /> is not initialized yet")}))},{});return{Provider:EnhancedProvider(function(e){var n=[].concat(_toConsumableArray(i),defaultMiddlewares).map(function(t){return t({initialState:r,actionsCreators:o},e,y)});l=e.state,t={setState:function(t,r){return e.setState(t,r)},initializedMiddlewares:n}},a.Provider,r),connect:connect(a.Consumer),actions:y,subscribe:u,unsubscribe:f,getState:function(){return l}}};module.exports=createStore;
//# sourceMappingURL=react-waterfall.dev.js.map
