"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

require("babel/register");
require("babel/polyfill");

var countryData = require("./../util/country-data");

function find(opts) {
    if (!_underscore2["default"].isEmpty(opts) && _underscore2["default"].isObject(opts)) {
        return _underscore2["default"].findWhere(countryData, opts);
    } else {
        return undefined;
    }
}

exports["default"] = {
    find: find,
    countries: countryData
};
module.exports = exports["default"];
