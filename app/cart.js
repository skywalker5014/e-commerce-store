const buttnn =  document.getElementById('orderbutton');
// var clickcount = 0;

function removeGrocery() {
    localStorage.setItem('groceryValue', 'empty');
    window.location.reload();
}

function removeMedicine() {
    localStorage.setItem('medValue', 'empty');
    window.location.reload();
}

function removeFood() {
    localStorage.setItem('foodValue', 'empty');
    window.location.reload();
}

    var medi = localStorage.getItem('medValue'); 
    var grocery = localStorage.getItem('groceryValue');
    var food = localStorage.getItem('foodValue');


window.onload = function() {
  var medi = localStorage.getItem('medValue'); 
  var grocery = localStorage.getItem('groceryValue');
  var food = localStorage.getItem('foodValue');

    
    var output = document.getElementById('groceryitem');
    output.innerText = grocery;
    output.style.color = 'white';


    var output = document.getElementById('fooditem');
    output.innerText = food;
    output.style.color = 'white';

    var output = document.getElementById('medicineitem');
    output.innerText = medi;
    output.style.color = 'white';
};



if(food == 'empty' && medi == 'empty' && grocery == 'empty'){
console.log('yes');
buttnn.style.display = 'none';
}
else{
console.log('no');

buttnn.style.display = 'block';

}

function paymentpage(){
    // clickcount += 1;
    window.location.href = "payment.html";
}

// buttnn.addEventListener("click", function() {
//     clickcount += 1;
//     console.log(clickcount);
//   });


