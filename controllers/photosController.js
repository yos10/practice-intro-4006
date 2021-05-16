'use strict';

exports.doGet = (req, res, next) => {
  res.render('photos', { message: 'Some photos' });
};

exports.printParams = (req, res, next) => {
  const paramsTitle = req.params.title;
  res.render('photos', { message: paramsTitle });
};
