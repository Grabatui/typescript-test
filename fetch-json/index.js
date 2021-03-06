"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'http://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url)
    .then(function (response) {
    var todo = response.data;
    var id = todo.id;
    var title = todo.title;
    var finished = todo.completed ? 'Yes' : 'No';
    logTodo(id, title, finished);
});
var logTodo = function (id, title, finished) {
    console.log("\n        TODO with id " + id + " and title \"" + title + "\"\n        Is finished? " + finished + "\n    ");
};
