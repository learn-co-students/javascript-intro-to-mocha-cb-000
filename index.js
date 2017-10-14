function theTruth(){
  return true;
}

function sayHey(){
  return "Hey!";
}

function sayHeyFriend(name){
  return `Hey, ${name}!`;
}

function favoriteIceCream(iceCream){
  return `I love ${iceCream}`;
}

function shouting(str){
  var newStr = "";

 for(var i = 0; i < str.length; i++) {
   newStr = newStr + str[i].toUpperCase();
 }
 return newStr;
}

function roundDown(num){
  return Math.floor(num);
}
