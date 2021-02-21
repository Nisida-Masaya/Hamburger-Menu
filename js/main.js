'use strict';
{
    hamburger();
    
    function hamburger(){
        var body = document.body; //document.bodyは文書の内容を持つ要素
        var hamburger = document.getElementById('js_hamburger');
        var bgBlack = document.getElementById('js_bg_black');
        
        hamburger.addEventListener('click', () => {
            body.classList.toggle('nav-open'); 
        });
        bgBlack.addEventListener('click', () => {
            body.classList.remove('nav-open');
        });
    }
}