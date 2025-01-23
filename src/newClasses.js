"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vacation = void 0;
var Vacation = /** @class */ (function () {
    function Vacation(location, weather) {
        this.location = location;
        this.weather = weather;
    }
    Vacation.prototype.travelPlans = function () {
        return "We are going to ".concat(this.location, " and hopefully it will be ").concat(this.weather, "!");
    };
    return Vacation;
}());
exports.Vacation = Vacation;
