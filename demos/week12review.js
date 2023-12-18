//How does JavaScript sort?
//What is the default order?
//and what if you wantedto to sort number
data = ["9","800","12","1"]
console.log(data.sort());//Alphabetic 
const dataSort = data.sort((a,b) => b -a);//Descending big to small
const dataSort1 = data.sort((a,b) => a -b);//Acsending 
console.log(dataSort);
console.log(dataSort1)

//FIND: Is like filter but return only the first item
number = [9,55,33,123,1];
//what is the first number that is greater than 50
first = number.find(n => n> 50);
console.log(first)//55
//Filter will bring all the number will be greater than 50
all = number.filter(n => n > 50)
console.log(all)//55,123

//WHAT IS THE DIFFERENT BTWN JS AND JSON DATA
//JSON MUST HAVE A QUOTED KEY
//VALID JS BUT INVALID JSON
js_only ={id: 123,name:"Rafiki"};
js_or_JSON =`{"id":123,"name":"ABC"}`

console.log(js_only.name)//ABC
console.log(js_or_JSON.name)//Undefined
console.log(js_only.length)//Undefined as objects have no length
console.log(js_or_JSON.length)//28 as its number of char in text

//CONVERT JS DATA TO JSON TEXT/STRING
console.log(JSON.stringify(js_only));

//CONVERT JSON TEXT/STRING DATA TO JS
console.log(JSON.parse(js_or_JSON));//CUT THE STRING UP

//HOW TO GET ALL ELEMENTS WITH A SPECIFIC TAG NAME
all_divs = document.getElementsByTagName("div");
all_divs1 = document.querySelectorAll("div")
