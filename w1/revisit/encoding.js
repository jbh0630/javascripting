const urlDecode = function(text) {
  let sText = "";
  let obj = {};
  sText = text.split("%20").join(" ").split(/[=&]/);
  for (let i = 0; i < sText.length; i+=2) {
    obj[sText[i]] = sText[i+1];
  }
  return obj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
