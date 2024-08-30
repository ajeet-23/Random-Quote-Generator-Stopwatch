//DOM Manipulation

/*1.const title=document.querySelector('#main-heading');
title.style.color=red;
console.log(title);

const listItems=document.querySelectorAll('list-items');
//listItems.style.fontSize='3rem';
for(i=0; i<listItems.length; i++){
    listItems[i].style.fontSize='5rem';
}


console.log(listItems);*/

//Creating Elements
const ul=document.querySelector('ul');
const li=document.createElement('li');

//Adding Elements
ul.append(li)

//Modifying the text
/*2.const firstListItem=document.querySelector('list-items');
console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML);*/
li.innerText='X-men';

//modifying Attributes & Classes
li.setAttribute('id', 'main-heading');
li.removeAttribute('id');

const title=document.querySelector('#main-heading');

console.log(title.getAttribute('id'));