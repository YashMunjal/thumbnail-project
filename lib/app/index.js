"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var bodyParser = __importStar(require("body-parser"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var auth_1 = __importDefault(require("./routes/auth"));
var image_1 = __importDefault(require("./routes/image"));
var path_1 = __importDefault(require("path"));
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
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(express_1.default.json());
    app.use(cookie_parser_1.default());
    app.use(express_1.default.static(path_1.default.resolve("./public")));
    // Routes
    app.use('/api/auth', auth_1.default);
    app.use('/api/tool', image_1.default);
    return server;
}
exports.default = createServer;
