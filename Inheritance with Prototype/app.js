// KALITIM - INHERITANCE


function Person(name,age) {
    this.name=name;
    this.age=age;
}
Person.prototype.showInfos=function(){
    console.log("İsim: "+ this.name + " Yaş: " + this.age);
}


// const person1 = new Person("Samet",57);
// console.log(person1);
// person1.showInfos();



function Employee(name,age,salary){
    // this.name=name;
    // this.age=age;
    // Call Metodu (Yukarıda zaten name ,age var bir daha burda yazmaya gerek yok.)
    Person.call(this,name,age)
    this.salary=salary;
}

Employee.prototype = Object.create(Person.prototype); // Yukarıdan extra showInfos fonksiyonu gelir.

Employee.prototype.toString=function(){
    console.log("Employee");
}

//Override - İptal Etme
Employee.prototype.showInfos=function(){ // Yukarıda object create ile miras almıştık bunu fakat begemenmedik override ettik. (iptal edip , tekrar üzerinde yazdık.)
    console.log("OVERRIDE","İsim: ",this.name,"Yaş: ",this.age,"Maaş: ",this.salary);
}

const deneme = new Employee("MEC",50,5000);
console.log(deneme);