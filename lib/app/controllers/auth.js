"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleLoginRequest = void 0;
var uuid_1 = require("uuid");
var auth_1 = require("../services/auth");
var logger_1 = __importDefault(require("../services/logger"));
// eslint-disable-next-line import/prefer-default-export
exports.handleLoginRequest = function (req, res) {
    try {
        if (!req.body)
            return res.status(400).json({ errro: 'Invalid Request' });
        var _a = req.body, username = _a.username, password = _a.password;
        if (!username || !password)
            return res.status(400).json({ error: 'username or password missing' });
        // Todo: Do stuff with username and password...
        var payload = {
            id: uuid_1.v4(),
            username: username,
        };
        var token = auth_1.generateToken(payload);
        return res.status(200).cookie('token', token).json({ status: 'success', token: token });
    }
    catch (err) {
        logger_1.default.error(err);
    }
    return res.status(500).json({ error: 'Something went wrong' });
};
