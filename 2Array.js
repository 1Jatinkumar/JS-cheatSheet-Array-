let myFriends= new Array(1,2,3,4,5,6,7,8,9);
// console.log(myFriends);

// 2nd way
let friends= [1,2,3,4,5,6,7,8,9,1,2,3];
// console.log(friends);


// ------------------operations----------------------------------

//----1 basic oprations------------
//push -> push at last
friends.push(10);
console.log(friends);


//pop -> pop from last
var popeditem= friends.pop()
// console.log(popeditem);
console.log(friends);



// shift -> pop from front
var shiftedItem= friends.shift();
console.log(shiftedItem);
console.log(friends);



// unshift -> add at front
console.log("--unshift--");
friends.unshift(shiftedItem);
console.log(friends);


// delete -> delete the item but no shifting of elements
console.log("---------delete-----------------------");
var deletedItem= delete friends[0];
console.log(friends);
console.log("item at 0 index =>  "+friends[0]);




// -----2 few more other ---------------
// 1 (splice) ->   like a knife of army => can do - insert, remove, replace
console.log("---------splice-----------------------");


// remove - using splice
var splicedArray= friends.splice(0,2);       // start from 0, remove items=2;
console.log(friends);
console.log(splicedArray);


// concat
friends= splicedArray.concat(friends);
console.log(friends);

// replace -using splice
friends.splice(0,1, "hello","bye");
console.log(friends);


// add
friends.splice(friends.length, 0, "good", "morning");
console.log(friends);


// 2 slice -> It returns a new array copying to it all items
console.log("-----------slice---------------------");
 var slicedArray= friends.slice(0,3)
 console.log(friends);
 console.log(slicedArray);





console.log("------------------concat-------------------");
var array= [1,2,3,4,5];
console.log(array);

array= array.concat(6,7)
console.log(array);

array= array.concat("helllo", "bye");
console.log(array);

array= array.concat([8,9],[10]);
console.log(array);

array= array.concat({key:"value", key2:45});
console.log(array);




//------------ looping---------------
// while
// do while
// for
// for in
// for of
// forEach

console.log("----------------------------------------------------------------------------------looping------------------------------");

//-- while---
let i=0;
while(i < friends.length){
    console.log(friends[i]);
    i++;
}

//-- for--- 
console.log("---for---");
for (let i=0; i < friends.length; i++){
    console.log(friends[i]);
}


//-- do while---
console.log("-------do while loop-------");
i=0
do{
    console.log(friends[i])
    i++;
}while(i<friends.length)


//-- for in---  =>{output index}
console.log("-----------for in loop-----------");
for(var elements in friends){
    console.log(elements);
}

//-- for of---  =>{outputdata}
console.log("--------------------for of loop---------------");
for(var elements of friends){
    if(elements>5){
        console.log(elements);
    }else{
        console.log(`elements less then 5 :${elements}`);
    }
}

//-- forEach--
console.log("--------------------forEach---------------");
friends.forEach(function(data){
    if(data==5){
        console.log("i cant break loop at 5");
    }else{
        console.log(data);
    }
});

















// ---------------------searching-------------------------------
console.log("------------------searching------------");
console.log(friends);

//-- indexOf---
console.log("--indexOf--");
console.log(friends.indexOf(1));
console.log(friends.indexOf("hello"));
console.log(friends.indexOf(100));

//-- includes--
console.log("--includes--");
console.log(friends.includes("hello"));
console.log(friends.includes(100));

//-- lastIndexOf---
console.log("--lastIndexOf--");
console.log(friends.lastIndexOf(1));


//bug in indexOf
console.log("----------bug in indexOf--------");
const arr = [NaN];
console.log( arr.indexOf(NaN) ); // -1 (wrong, should be 0)
console.log( arr.includes(NaN) );// true (correct)


//-- find , findIndex, findLastIndex----
// arr.find(fn)
console.log("--------------------------------------------------------------------------------------------------------------------------");
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 1, name: "John"}
  ];

console.log("find-------------");
let value= users.find(function(data, index, arr){
    if(data.name==="John"){
        return data;
    }
});
console.log(value);

console.log(users.find(item => item.id===1));
console.log("---findIndex--------------");
console.log(users.findIndex(item => item.id===1));
console.log(users.findLastIndex(item => item.id===1));



//--filter --- {improve -> find} => {it can return multiple values}
console.log("----filter------------");
let foundItem= users.filter(item => item.id > 1);
console.log(foundItem);