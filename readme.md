✍🏻<br>
1️⃣ What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

✅ <br>
🎯**getElementById**:<br> It selects a **single element** based on the unique **name of the id attribute** on the html.<br>
for example:<br>

```js
const callBtnR = document.getElementById('call-btnR');
```

🖊️When selecting elements by id, **we don't have to write the id selector(#)**<br>

🎯**getElementsByClassName**:<br> It selects **all the elements** based on the same **class name** given in the html file's class attribute. It gives a **html collection** which looks like an array but its just an **array like object**. Its a **live collection** means any change in the html file of that particular element will **dynamically update** the collection. This html collection will have length, index property but we can not use some specific array methods like map, forEach etc.So if we want to use it like an array we need to convert it into an array.<br>

for example:<br>

```js
const callBtnsR = document.getElementsByClassName('call-btnR');
```

🖊️When selecting elements by class, we **don't have to write the class selector(.)**<br>

🎯**querySelector**:<br> It selects the **first element that matches** the name given on the **CSS selector**.<br>

for example:<br>

```js
const callBtnR = document.querySelector('.call-btnR');
```

🖊️This will give the first element from the html that posses the 'call-btn' class name.<br>

When selecting elements by querySelector, we **have to write the css selector like . or #**<br>

🎯**querySelectorAll**:<br> It selects **all the element that matches** the name given on the **CSS selector**. It gives a **nodelist** which looks like an array but its just an array like object. Its **not a live collection** means any change in the html file of that particular element will **not dynamically update the nodelist**. We can not use some specific array methods like map, filter etc.So if we want to use it like an array we need to convert it into an array.<br>

for example:<br>

```js
const callBtnsR = document.querySelectorAll('.call-btnR');
```

🖊️This will give all the element from the html that posses the 'call-btn' class name.<br>

When selecting elements by querySelectorAll, we **have to write the css selector like . or #**<br>

<hr>
<hr>

✍🏻<br>
2️⃣ How do you create and insert a new element into the DOM?<br>
✅ <br>
We can create and insert a new element into the DOM in **three ways**:<br>
🎯**Using Create element**:<br><br>

🖊️**At first create a html element**<br>

```js
const h2 = document.createElement('h2');
```

🖊️**then we can add content using textContent**<br>

```js
h2.textContent = 'Adding Text To h2';
```

🖊️**lastly we need to insert it into the DOM here we have to mention the parent name of the DOM element where we want to include h2 that we created. We can use append child to insert the h2 to the end of a parent or prepend to insert the h2 to the beginning of a parent.**<br>

```js
const sidebarContainerR = document.getElementById('sidebar-containerR');
sidebarContainerR.appendChild(h2);
```

🎯**Using insertAdjacentHTML**<br><br>

🖊️**At first create a html element**<br>

```js
const HTMLR = `

<div class="sidebar-content">
    <div class="history-hotline">
        <h4 class="history-title">${hotlineCenter}</h4>
        <p>${centerNumber}</p>
    </div>
    <div class="history-date">
        <p class="date">${new Date().toLocaleTimeString()}</p>
    </div>
</div>`;
```

🖊️**Then select the parent element where you want to insert this html**<br>

```js
const sidebarContainerR = document.getElementById('sidebar-containerR');
```

🖊️**Then insert the html using insertAdjacentHTML which takes two parameter first one is the position like where you want to put the html and the second parameter is the html that you created**<br>

```js
sidebarContainerR.insertAdjacentHTML('afterbegin', HTMLR);
```

🖊️In the sidebarContainer there will be now a child named sidebar-content. And it will be the first child among all the children of that particular parent.<br>

```js
sidebarContainerR.insertAdjacentHTML('beforeend', HTMLR);
```

🖊️In the sidebarContainer there will be now a child named sidebar-content. And it will be the last child among all the children of that particular parent.<br>

```js
sidebarContainerR.insertAdjacentHTML('beforebegin', HTMLR);
```

🖊️Just before the sidebarContainer there will be now a new element named sidebar-content. And none of them have any child parent relationship.<br>

```js
sidebarContainerR.insertAdjacentHTML('afterend', HTMLR);
```

🖊️Just after the sidebarContainer there will be now a new element named sidebar-content. And none of them have any child parent relationship.<br>

🎯**Using innerHTML**<br><br>

🖊️**At first select the parent element where you want to insert this html**<br>

```js
const sidebarContainerR = document.getElementById('sidebar-containerR');
```

🖊️**Then add the html using innerHTML**<br>

```js
sidebarContainerR.innerHTML = '<h2>Adding Text using innerHTML</h2>';
```

This **=** will **overwrite** any previous **content** of that particular container. If we **don't** want to **alter** the previous **content** we can add it like this **+=**. This **innerHTML** will be added as a **child** of the container and **sibling** to others **children** of it.<hr>

<hr>
<hr>

✍🏻<br>
3️⃣ What is Event Bubbling and how does it work?
✅ <br>

<hr>
<hr>

✍🏻<br>
4️⃣ What is Event Delegation in JavaScript? Why is it useful?
✅ <br>

<hr>
<hr>

✍🏻<br>
5️⃣ What is the difference between preventDefault() and stopPropagation() methods?
✅ <br>
