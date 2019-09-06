"use strict";
exports.__esModule = true;
var Parliament = /** @class */ (function () {
    function Parliament(results, algorithm, minimum, seats) {
        this.totalValidVotes = 0;
    }
    Parliament.prototype.getValidVotes = function (results) {
        this.totalValidVotes = results.map(function (party) { return party.votes; }).reduce(function (a, b) { return a + b; });
    };
    ;
    Parliament.prototype.whoGetsSeats = function (results, minimum) {
        var _this = this;
        this.partiesWithSeats = results.filter(function (party) { return party['votes'] >= (_this.totalValidVotes / 100) * minimum; });
    };
    return Parliament;
}());
var x = new Parliament([
    { party: "PP", votes: "2000" },
    { party: "PSOE", votes: "1700" },
    { party: "C's", votes: "1200" },
    { party: "UP", votes: "1000" },
], "D'Hont", 5, 30);
console.log(x.getValidVotes());
