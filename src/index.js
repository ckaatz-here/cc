require('babel/register');
require("babel/polyfill");
import _ from "underscore";

const countryData = require('./../util/country-data');

function find(opts) {
    if (!_.isEmpty(opts) && _.isObject(opts)) {
        return _.findWhere(countryData, opts);
    } else {
        return undefined;
    }
}

export default {
    find: find,
    countries: countryData
};