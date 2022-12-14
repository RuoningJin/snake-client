let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = (data) => {
  if (data === ' ') {
    connection.write('Say: hello');
  }
  if (data === 'w') {
    connection.write("Move: up");
  }
  if (data === 'a') {
    connection.write('Move: left');
  }
  if (data === 's') {
    connection.write('Move: down');
  }
  if (data === 'd') {
    connection.write('Move: right');
  }
  if (data === '\u0003') {
    process.exit();
  }
};

setupInput(handleUserInput);

module.exports = setupInput;