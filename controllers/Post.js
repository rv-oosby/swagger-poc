'use strict';

var utils = require('../utils/writer.js');
var Post = require('../service/PostService');

module.exports.deletePost = function deletePost (req, res, next) {
  var id = req.swagger.params['id'].value;
  Post.deletePost(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPost = function getPost (req, res, next) {
  Post.getPost()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postPost = function postPost (req, res, next) {
  var post = req.swagger.params['post'].value;
  Post.postPost(post)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePost = function updatePost (req, res, next) {
  var id = req.swagger.params['id'].value;
  var post = req.swagger.params['post'].value;
  Post.updatePost(id,post)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
