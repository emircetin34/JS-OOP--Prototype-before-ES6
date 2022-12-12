// Call , Apply , Bind

const obj1 = {
    number1 : 10,
    number2 : 20
};

const obj2 = {
    number1:30,
    number2:40
};

function addNumbers(number3,number4){
    console.log(this.number1 + this.number2 + number3 + number4);
}

// addNumbers(100,200); // NaN olarak döndürür. Çünkü fonksiyon içerisinde this.number1 gibi tanımsız bir parametre var nereden veri alacağını bilemiyor.
// // Dolayısıyla biz burada CALL metodu ile nereden geleceğini söyleyeceğiz.

// // CALL
// addNumbers.call(obj1,100,200); // 330
// addNumbers.call(obj2,100,200); // 370

// // APPLY
// addNumbers.apply(obj1,[100,200]); // 330
// addNumbers.apply(obj2,[100,200]); // 370


//Bind
function getNumbersTotal (number3,number4){
    return this.number1 + this.number2 + number3 + number4;
}
//this anahtar kelimesinin kullanıdığı alanlarda genelde bind ile işlem yapılır.
const copyFunc1 = getNumbersTotal.bind(obj1);
console.log(copyFunc1);
console.dir(copyFunc1); // Daha detaylı bilgi verir.




