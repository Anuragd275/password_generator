const elements = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

document.getElementById("btn").onclick = function () {
    document.getElementById('beforetext').innerHTML = "Your new Password is : "
    document.getElementById("pass").innerHTML = 
        String( elements[((Math.floor(Math.random() * elements.length)))] +
         elements[((Math.floor(Math.random() * elements.length)))] +
         elements[((Math.floor(Math.random() * elements.length)))] +
         elements[((Math.floor(Math.random() * elements.length)))] +
         elements[((Math.floor(Math.random() * elements.length)))] +
         elements[((Math.floor(Math.random() * elements.length)))] +
         elements[((Math.floor(Math.random() * elements.length)))] +
         elements[((Math.floor(Math.random() * elements.length)))] +
         elements[((Math.floor(Math.random() * elements.length)))] +
         elements[((Math.floor(Math.random() * elements.length)))] +
         elements[((Math.floor(Math.random() * elements.length)))] +
         elements[((Math.floor(Math.random() * elements.length)))] )
    
 }


 let c = document.getElementById('c')

if(c){
    console.log("AaA hu")
}