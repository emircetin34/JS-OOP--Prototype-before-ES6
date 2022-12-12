// Global Scope
console.log(this); // Üzerinde bulunğudumuz objeyi gösteren anahtar kelimemiz (this)

// Kendi Objemizi Oluşturalım
const emp1 = { // Bu yapı Object Literal Olarak geçer.
    name : "Emir",
    age : 25,
    showInfos: function() {console.log("Bilgiler Gösteriliyor...")}
};

const emp2 = {
    name : "Ahmet",
    age : 25
};

// Exstra Kendi Özelliğimizi Atıyalım
emp1.salary = 4000;
emp1.showInfos();

console.log(emp1); 
console.log(typeof emp1); //object olarak döndürür.


// Projelerde Object Literal yönteminden ziyade , yani sürekli emp1 emp2 gibi obje oluşturmaktan yerine 1tane constructor (yapıcı method) oluşturulur.
// Oluşturulan yapıcı method üzerinden devam edilir. Bizim objelerimizde sürekli ortak değişkenler var. Örneğin personel objesi için her personelin ismi yaşı maaşı gibi
// değerleri olacağı için biz tekrar tekrar bu değişkenleri oluşturmaktan kaçınırız. Constructor metod sayesinde bir kere oluşturur daha performanslı bir yazılım ortaya koymuş oluruz.




// Constructor - Yapıcı Fonksiyon

// Örneğin Date() fonksiyonu daha önceden tanımlanmıs bir contructor fonksiyondur.
// Biz bu fonksiyondan yararlanarak objeler üretebiliriz.
const date = new Date();
const date2 = new Date();





// Kendi Constructor'ımızı Yapalım
function Employeex() { //büyük harfle başlaması önemlidir.
    this.name = "Emir"
}
// Objelerimizi oluşturduk.
const empx1 = new Employeex();
const empx2 = new Employeex();

console.log(empx1);
console.log(empx2);








// Yukarıda constructorın kullanma amacından bahsettik. Biz yapıcı fonksiyonlarımızı kolaylık sağlaması için kullanıyoruz.
// Dolayısıyla this.name = "Emir" doğru bir kullanım değil.
// this.name = name olmalıdır.

// CONSTRUCTOR YAPICI FONKSİYON (THIS)
function Employee(name,age,salary){
    this.name = name
    this.age = age
    this.salary = salary
    this.showInfos = function(){
        console.log(this.name,this.age,this.salary);
    }

    console.log(this); //Obje içerisinde yazdığımız için bizim verilerimiz geld. //Globalde yazsaydık window objesi gelecekti.
}

const empY1 = new Employee("Emir",25,5000);
const empY2 = new Employee("Ahmet",30,6000);

empY1.showInfos(); //Yukarıdaki fonksiyonda return kullansaydık bilgileri çagırmak için console.log içerisinde yazacaktık.
empY2.showInfos();
// console.log(empY1);
// console.log(empY2);
