"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/select", ctrl.output.select);
router.get("/setting", ctrl.output.setting);
router.get("/community", ctrl.output.community);
router.get("/mypage", ctrl.output.mypage);
router.get("/fix_comment", ctrl.output.fix_comment);
router.get("/write", ctrl.output.write);
//외부로 내보내기
module.exports = router;