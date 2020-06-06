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
exports.validateRequestAuth = exports.verifyToken = exports.generateToken = void 0;
var jwt = __importStar(require("jsonwebtoken"));
var logger_1 = __importDefault(require("./logger"));
exports.generateToken = function (payload) {
    try {
        var token = jwt.sign(payload, 'averyverystrongtokenkey');
        return token;
    }
    catch (err) {
        logger_1.default.error(err);
    }
    return new Error('Invalid Token');
};
exports.verifyToken = function (token) {
    try {
        var verified = jwt.verify(token, 'averyverystrongtokenkey');
        return !!verified;
    }
    catch (err) {
        logger_1.default.error(err);
    }
    return false;
};
exports.validateRequestAuth = function (req, res, next) {
    if (!req.cookies.token)
        return res.status(400).json({ error: 'Token Missing' });
    var token = req.headers.authorization || req.cookies.token;
    var verify = exports.verifyToken(token);
    if (!verify)
        return res.status(403).json({ error: 'Invalid Token' });
    return next();
};
