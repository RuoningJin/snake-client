const net = require("net");
const {IP, PORT} = require('./constants');

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (msg) => {
    console.log(msg);
  });

  conn.on("connect", () => {
    console.log('Successfully connected to game server');
    conn.write("Name: Ron");
  });

  // conn.on("connect", () => {

  //   // setInterval(() => {
  //   //   conn.write("Move: up");
  //   // }, 50);
  //   // setTimeout(() => {
  //   //   conn.write("Move: left");
  //   // }, 50);

  // });

  

  return conn;
};

module.exports = connect;


