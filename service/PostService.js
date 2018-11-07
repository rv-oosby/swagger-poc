'use strict';


/**
 * Deletes a post
 *
 * id Integer Post id
 * no response value expected for this operation
 **/
exports.deletePost = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Fetch posts
 *
 * returns List
 **/
exports.getPost = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 20,
  "title" : "Hello World",
  "body" : "Lorem ipsum dolor isit.",
  "userId" : 1
}, {
  "id" : 20,
  "title" : "Hello World",
  "body" : "Lorem ipsum dolor isit.",
  "userId" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new post
 *
 * post NewPost  (optional)
 * returns Post
 **/
exports.postPost = function(post) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 20,
  "title" : "Hello World",
  "body" : "Lorem ipsum dolor isit.",
  "userId" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a post
 *
 * id Integer Post id
 * post NewPost  (optional)
 * returns Post
 **/
exports.updatePost = function(id,post) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 20,
  "title" : "Hello World",
  "body" : "Lorem ipsum dolor isit.",
  "userId" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

