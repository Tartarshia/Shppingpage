"shopping cart"

function AddtoCart() {
  console.log('hi');
  var x = document.getElementById('Items');
  var new_row = x.rows[1].cloneNode(true);
  var len = x.rows.length;
  new_row.cells[0].innerHTML = len;
  var inp1 = new_row.cells[1].getElementsByTagName('input')[0];
  inp1.id += len;
  inp1.value = '';
  var inp2 = new_row.cells[2].getElementsByTagName('input')[0];
  inp2.id += len;
  inp2.value = '';
  x.appendChild(new_row);
}

function ViewCart(){
	alert("Item has been added to the shopping cart.");

}


function OpenCart(){
  window.open('cart.html','_blank','width=600,height=400,top=100,left=0')
}


function hostory1() {
  window.history.go(-1)
}

function opacity(){
  var bgnd = document.getElementsByTagName("body")[0];
  bgnd.style="opacity:0.5"
}

function greyscale(){
  var bgnd = document.getElementsByTagName("body")[0];
  bgnd.style.WebkitFilter="grayscale(50%)"
}

function contrast(){
  var bgnd = document.getElementsByTagName("body")[0];
  bgnd.style.WebkitFilter="contrast(200%)"
}

function clearstyle(){
  var bgnd = document.getElementsByTagName("body")[0];
  bgnd.removeAttribute("style");
}
