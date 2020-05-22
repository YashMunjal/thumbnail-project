"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var app_1 = __importDefault(require("./app"));
var logger_1 = __importDefault(require("./app/services/logger"));
function init() {
    try {
        var server = http_1.default.createServer(app_1.default().callback());
        var PORT_1 = process.env.PORT || 8000;
        server.listen(PORT_1, function () { return logger_1.default.info("\uD83D\uDE80 Server started at PORT:" + PORT_1); });
    }
    catch (err) {
        logger_1.default.error(err);
        process.exit(1);
    }
}
init();
