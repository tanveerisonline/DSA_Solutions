function revStr(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== "string") {
    console.log("Not good input");
  } else return str.split("").reverse().join("");
}
console.log(revStr("Hello"));
