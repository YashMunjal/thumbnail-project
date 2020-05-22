"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_1 = require("../controllers/auth");
var router = express_1.Router();
router.post('/login', auth_1.handleLoginRequest);
exports.default = router;
