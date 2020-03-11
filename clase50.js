console.log("a");
setTimeout(() => console.log("b"), 0);
console.log("c");

setTimeout(() => console.log("d"), 2000);
for (var i = 0; i < 10; i++) {}
