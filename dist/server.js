"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));
var _express = _interopRequireDefault(require("express"));
var _helmet = _interopRequireDefault(require("helmet"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _cors = _interopRequireDefault(require("cors"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _config = _interopRequireDefault(require("../config/config.js"));
var _machineRoutes = _interopRequireDefault(require("./routes/api/machineRoutes.js"));
var _armoireRoutes = _interopRequireDefault(require("./routes/api/armoireRoutes.js"));
var _factureRoutes = _interopRequireDefault(require("./routes/api/factureRoutes.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_dotenv["default"].config();
var app = (0, _express["default"])();
var _process$env$PORT = process.env.PORT,
  PORT = _process$env$PORT === void 0 ? 5000 : _process$env$PORT;

// Middleware to log incoming requests
app.use(function (req, res, next) {
  console.log("[".concat(new Date().toISOString(), "] ").concat(req.method, " ").concat(req.url));
  next();
});
app.use((0, _helmet["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use((0, _cors["default"])());
app.use(_express["default"]["static"]('./dist/'));
app.use('/api', _machineRoutes["default"]);
app.use('/api', _armoireRoutes["default"]);
app.use('/api', _factureRoutes["default"]);
app.get('/api', function (req, res) {
  res.json({
    message: 'Welcome to the API'
  });
});
var _config$mongo = _config["default"].mongo,
  uri = _config$mongo.uri,
  username = _config$mongo.username,
  password = _config$mongo.password,
  dbName = _config$mongo.dbName;
_mongoose["default"].connect("mongodb+srv://".concat(username, ":").concat(password, "@").concat(uri, "/").concat(dbName)).then(function () {
  return console.log('MongoDB connected');
})["catch"](function (err) {
  return console.error('MongoDB connection error:', err);
});

// Middleware to log outgoing responses
app.use(function (req, res, next) {
  res.on('finish', function () {
    console.log("[".concat(new Date().toISOString(), "] ").concat(req.method, " ").concat(req.url, " ").concat(res.statusCode));
  });
  next();
});
app.listen(PORT, function () {
  return console.log("Server running on port: ".concat(PORT));
});