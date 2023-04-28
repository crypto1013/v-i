export function lock() {
  const password = 'readkey';
  var response;
  while (response != password) {
    response = window.prompt('cloud-lock-key');
  }
}
