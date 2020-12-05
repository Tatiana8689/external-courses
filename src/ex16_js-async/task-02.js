const input = document.getElementById('search');
const form = document.getElementById('form')
const result = document.getElementById('result')

const debounce = (fn, ms) => {
  let timeout;

  return function () {
    const call = () => { fn.apply(this, arguments) };

    clearTimeout(timeout);
    timeout = setTimeout(call, ms);
  }
}

function send() {
  const elem = dataMock.find(el => el.id === input.value);
  if (elem) {
    console.log(elem);
  } else {
    console.log('Not found');
  }
}

debouncedSend = debounce(send, 1000);
input.addEventListener("keyup", debouncedSend);
