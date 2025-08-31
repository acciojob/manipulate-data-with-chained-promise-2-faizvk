//your JS code here. If required.
const output = document.getElementById("output");


function getArray() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

getArray()
  
  .then((arr) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const evens = arr.filter(num => num % 2 === 0);
        output.textContent = evens.join(",");
        resolve(evens);
      }, 1000);
    });
  })
  
  .then((evens) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const doubled = evens.map(num => num * 2);
        output.textContent = doubled.join(",");
        resolve(doubled);
      }, 2000);
    });
  })
  .catch((err) => {
    output.textContent = "Error: " + err;
  });
