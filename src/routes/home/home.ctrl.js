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
};

module.exports = {
    output,
};