const randomNumber1 = Math.floor(Math.random() * 6) + 1;
//console.log(randomNumber1);



let randomDiceimage ="dice" + randomNumber1 + ".png";
console.log(randomDiceimage);
let randomimagesource = "images/" + randomDiceimage ;
console.log(randomimagesource);

let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource);



let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceimage2 ="dice" + randomNumber2 + ".png";
//console.log(randomDiceimage2);
let randomimagesource2 = "images/" + randomDiceimage2 ;
//console.log(randomimagesource2);

let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimagesource2);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="ຜູ້ທີ່1ຊະນະ";
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="ຜູ້ທີ່1ຊະນະ";
}
else{
    document.querySelector("h1").innerHTML="ສະເໝີກັນ";
}

