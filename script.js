var obj1 ={
    name:"person 1",
    age: 5
}
var obj2 ={
    age: 5,
    name:"person 1"
}
var count=0;
var temp=0;
for(var key in obj1){
    temp+=1
    if(key in obj2 && obj1[key] == obj2[key] ){
        count+=1
        console.log(key in obj2)
    }
}
if(count==temp){
    console.log("The object have equal object values")
}
else{
    console.log("Not equal objects")
}