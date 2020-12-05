function get(url) {
  return new Promise((resolve, reject) => {
    let getRequest = new XMLHttpRequest();
    getRequest.open("GET", url, true);
    getRequest.onreadystatechange = function () {
      if (getRequest.readyState !== 4) {
        return;
      }
      if (getRequest.status === 200) {
        resolve(getRequest.response);
      } else {
        reject(new Error("Error"))
      }
    }
    getRequest.send()
  });
}

function send(url) {
  return new Promise((resolve, reject) => {
    let sendRequest = new XMLHttpRequest();
    let data = "name";
    sendRequest.open("POST", url, true);
    sendRequest.setRequestHeader('Content-type', 'application/json');
    sendRequest.onreadystatechange = function () {
      if (sendRequest.readyState !== 4) {
        return;
      }
      if (sendRequest.status === 200) {
        resolve(sendRequest.response);
      } else {
        reject(new Error("Error"))
      }
    }
    sendRequest.send(data)
  });
}
