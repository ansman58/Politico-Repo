const button = document.querySelectorAll('[type = "submit"]') 

button.addEventListener('click',(event) => {
    key = event.taget;
    for(let i = 0; i < button.length; i++) {
        alert(button[i]);
    }
})