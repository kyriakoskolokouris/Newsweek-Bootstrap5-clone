// console.log("it works");
// Make DATE dynamic
// const date = document.getElementById("date");
// const dynamicDate = Date().split(" ");
// const exactDate = dynamicDate.slice(0,4);
// const newDate = exactDate.toString();
// const finalDate = newDate.replaceAll(","," ");
// date.innerText = finalDate;


// const date = document.getElementById("date");
// const dynamicDate = Date().split(" ");
// console.log("dynamicDate", dynamicDate[2]);
// const arr = [];
// const newArr = arr.push(dynamicDate[0], dynamicDate[1], dynamicDate[2], dynamicDate[3]);
// console.log(arr);
// date.innerText = arr.join().replaceAll(",", " ");


const date = document.getElementById("date");
date.innerText = Date().split(" ").slice(0, 4).join().replaceAll(",", " ");