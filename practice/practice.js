// const myForm = document.querySelector('form#name')
// const formValue = myForm.value
// const btn = document.querySelector('#myBtn')





const myForm = document.querySelector('#name');
const formValue = myForm.value;
const btn = document.querySelector('#myBtn');

btn.addEventListener('click', (event) => {
    event.preventDefault
    // alert('hiiiii')
    alert(myForm.value)
})
