1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: **getElementById**: It selects a <span style="color:blue;"> single element</span> based on the unique name of the id attribute on the html.
for example:
const callBtn = document.getElementById('call-btn');

When selecting elements by id, we don't have to write the id selector(#)

**getElementsByClassName**: It selects all the elements based on the same class name given in the html file's class attribute. It gives a html collection which looks like an array but its just an array like object. Its a live collection means any change in the html file of that particular element will dynamically update the collection. This html collection will have length, index property but we can not use some specific array methods like map, forEach etc.

for example:
const callBtns = document.getElementsByClassName('call-btn');

When selecting elements by class, we don't have to write the class selector(.)

**querySelector**: It selects the first element that matches the name given on the CSS selector.

for example:
const callBtn = document.querySelector('.call-btn');

This will give the first element from the html that posses the 'call-btn' class name.

When selecting elements by querySelector, we have to write the css selector like . or # .

**querySelectorAll**: It selects all the element that matches the name given on the CSS selector. It gives a nodelist which looks like an array but its just an array like object. Its not a live collection means any change in the html file of that particular element will not dynamically update the nodelist.

for example:
const callBtns = document.querySelectorAll('.call-btn');

This will give all the element from the html that posses the 'call-btn' class name.

When selecting elements by querySelector, we have to write the css selector like . or #

2.  How do you create and insert a new element into the DOM? 3. What is Event Bubbling and how does it work? 4. What is Event Delegation in JavaScript? Why is it useful? 5. What is the difference between preventDefault() and stopPropagation() methods?
