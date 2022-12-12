// Normalde JS'de class yapısı var gibi gözükür. Fakat java , python , c# nesne tabanlı programlama dilleri gibi değildir.
// Class yapısı varmış gibi gözükür arka planda Prototype olarak söz dizimi olarak kalır.

// Jsde herbir objenin prototype'i vardır.


// Object Literal
// const object = new Object(); //en temel obje
// object.name = "Ahmet";
// console.log(object);




// Prototype : Oluşturduğumuz yeni bir obje aslında JSdeki varsayılan objeden miras alır. (INHERITANCE)
// Prototype Chain
function Employee(name,age){
    this.name = name,
    this.age = age,
    this.showInfos = function(){
        console.log("Bilgiler Gösteriliyor...");
    }
    this.toString = function(){
        console.log("Bu bir employee objesidir.");
    }
}


const emp1 = new Employee("Emir",25);  //objemizi tanımladık
console.log(emp1);
emp1.showInfos();

// Bizim temel objemiz olan Object Literalde bulunan bir metod var. Bu metodun adı toString()
// Prototype olarak oluşturduğumuz yeni objemizdede aynı metodu yazarsak ne olur ?
// Geçerli olacak olan metod en son yazdığımız metod yani prototype olarak oluşturulan metoddaki geçerli olur.

emp1.toString(); //Yukarıda obje içinde tanımlamasaydık 'object Object' olarak temel objemizden miras aldığını belirtecekti.