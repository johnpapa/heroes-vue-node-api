const captains = console;

function exit(message) {
  captains.log(message);
  captains.log('Press any key to exit');
  // process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdin.on('data', process.exit.bind(process, 0));
}
module.exports = exit;
