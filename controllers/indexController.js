'use strict';

exports.doGet = (req, res, next) => {
  res.render('index', { title: 'Express', user: req.user });
};
