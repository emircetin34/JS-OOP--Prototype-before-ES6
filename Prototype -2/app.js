// Prototype'lerin Belleki Performansı

function Employee(name,age){
    this.name = name;
    this.age = age;
}
Employee.prototype.showInfos= function(){
    console.log("Bilgiler Gösteriliyor..")
}
// Binlerce kayıta teker teker metod tanımlamak yerine tek bir yapıda metodu tanımlamayıp tüm kayıtlarda etkin hale getirebiliriz.
const emp1 = new Employee("Ahmet",35);
const emp2 = new Employee("Mehmet",45);
const emp999 = new Employee("Samet",55);

emp2.showInfos();
console.log(emp1);
console.log(emp2);
console.log(emp999);
