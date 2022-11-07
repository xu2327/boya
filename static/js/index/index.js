var nav = document.querySelector('.header-center')
var btn_cart = document.querySelector('.cart')
var flag = true; 
btn_cart.onclick = function() {
    
    if(flag){
        nav.style.display = 'block';
        flag = false
    }else{
        nav.style.display = 'none';
        flag = true
    }
}
