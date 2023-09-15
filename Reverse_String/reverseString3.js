const revStr = (str) => {
  if (!str || str.length < 2 || typeof str !== "string") {
    console.log("wrong input");
  } else return str.split("").reverse("").join("");
};
console.log(revStr("My name is John"));
