function revStr(str) {
  //check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Invalid Input";
  }
  const backwords = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwords.push(str[i]);
  }
  console.log(backwords);
  return backwords.join("");
}

revStr("my name is Tanveer");
