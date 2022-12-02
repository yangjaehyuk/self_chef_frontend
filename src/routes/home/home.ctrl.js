"use strict";


const output = {
  home: (req, res) => {
    res.render("home/index");
  },

  login: (req, res) => {
    res.render("home/login");
  },

  select: (req, res) => {
    res.render("home/select");
  },

  setting: (req, res) => {
    res.render("home/setting");
  },

  community: (req, res) => {
    res.render("home/community");
  },

  mypage: (req, res) => {
    res.render("home/mypage");
  },

  fix_comment: (req, res) => {
    res.render("home/fix_comment");
  },

  write: (req, res) => {
    res.render("home/write");
  },
};

module.exports = {
    output,
};