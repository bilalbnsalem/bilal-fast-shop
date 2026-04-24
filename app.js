let products = JSON.parse(localStorage.getItem("products")) || [];

function saveProducts(){
  localStorage.setItem("products",JSON.stringify(products));
}
