console.log("**** CREATE NODE ****")

//* ------- YENI BIR ELEMENT OLUSTURMA ------

//? 1- yeni bir element olustur
const myPar = document.createElement("p")

//? 2- Eger text tabanlı bir element ise text dugumunu olustur
const text = document.createTextNode("P elementi")

//? 3- Olusturulan text dugumunu yeni elemente bagla (append)
myPar.appendChild(text)

//?4- Yeni olusan elementi DOM tree'ye ekle.
const addItemSection = document.querySelector(".add-item")
addItemSection.appendChild(myPar)

//! Element.before()  ve Element.after() appenChild gibi aslında bir elementi DOM Tree'ye baglar.


addItemSection.before(myPar) //? add-item section'ın hemen üzerine myPar'i baglar.

//? React icerigine sahip olan li elementinin devamına yeni elemnti ekle
const reactLi = document.querySelector("ul li:nth-child(4)")
reactLi.after(myPar)