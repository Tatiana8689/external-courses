function fetchData(method, url, body) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();

    request.open(method, url, true);
    if (method === "POST") {
      request.setRequestHeader('Content-type', 'application/json');
    }

    request.onreadystatechange = function () {
      if (request.readyState !== 4) {
        return;
      }
      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject(new Error("Error"))
      }
    }
    request.send(body)
  });
}
