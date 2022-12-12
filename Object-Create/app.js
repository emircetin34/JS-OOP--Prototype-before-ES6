// Object Create



function Person(){
}
Person.prototype.test1=function(){
    console.log("TEST-1");    
}
Person.prototype.test2=function(){
    console.log("TEST-2");
}


function Employee(name,age){
    this.name=name;
    this.age=age;
}
Employee.prototype = Object.create(Person.prototype)
Employee.prototype.mytest=function(){
    console.log("MYTEST");
}

const emp= new Employee("Ahmet",30);
console.log(emp);

// employee < person < object literal
