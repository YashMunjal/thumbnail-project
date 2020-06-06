"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var image_1 = require("../controllers/image");
var auth_1 = require("../services/auth");
var router = express_1.Router();
router.post('/resize-image', auth_1.validateRequestAuth, image_1.handleDownloadImageFromNetwork);
exports.default = router;
