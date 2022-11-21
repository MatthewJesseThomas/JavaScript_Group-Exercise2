//Inputs
let sentence = document.querySelector('#Sentence');
let word = document.querySelector('#Word');
//Btns
let NumofChars = document.querySelector('#btnNumofChars');
let search = document.querySelector('#btnSearch');
//Outputs
let DisplayNumofChars = document.querySelector('#DisplayNumofChars');
let DisplaySearch = document.querySelector('#DisplaySearch');

let index = 0;

btnNumofChars.addEventListener('click', (e)=>{
    e.preventDefault();
    DisplayNumofChars.textContent = sentence.value.length
    console.log(sentence.length);
})
btnSearch.addEventListener('click', (e)=>{
    e.preventDefault();
    DisplaySearch.textContent = sentence.value.search(word.value) + 1
})
    

