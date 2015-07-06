var cc = require("./../dist/index.js");

module.exports = {
    "test algeria lookup": function(test){
        test.deepEqual(cc.find({name: "Algeria"}), {name: 'Algeria',alpha2: 'DZ',alpha3: 'DZA',isoNumeric: '012' }, "Should find the Algeria");
        test.done();
    },
    "test getting all values": function(test){
        test.ok(cc.countries.GBR.name === "United Kingdom");
        test.ok(cc.countries.GBR.alpha2 === "GB");
        test.ok(cc.countries.GBR.alpha3 === "GBR");
        test.ok(cc.countries.GBR.isoNumeric === "826");
        test.done();
    }
};