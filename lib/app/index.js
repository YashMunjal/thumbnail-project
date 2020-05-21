"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var App = /** @class */ (function () {
    function App(_app) {
        this.app = _app;
    }
    App.prototype.callback = function () {
        return this.app;
    };
    return App;
}());
function createServer() {
    var app = express_1.default();
    var server = new App(app);
    // Middlewares
    app.use(express_1.default.json());
    // Routes
    return server;
}
exports.default = createServer;
