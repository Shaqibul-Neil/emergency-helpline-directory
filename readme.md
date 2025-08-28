## 1️⃣❓What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?<br><br>

## ✍🏻 <br>

### 🎯**getElementById ::** <br><br>

It selects a **single element** based on the unique **name of the id attribute** on the html.<br>
for example:<br>

```js
const callBtnR = document.getElementById('call-btnR');
```

_When selecting elements by id, **we don't have to write the id selector(#)**_<br><br>

### 🎯**getElementsByClassName ::**<br><br>

It selects **all the elements** based on the same **class name** given in the html file's class attribute. It gives a **html collection** which looks like an array but its just an **array like object**. Its a **live collection** means any change in the html file of that particular element will **dynamically update** the collection. This html collection will have length, index property but we can not use some specific array methods like map, forEach etc.So if we want to use it like an array we need to convert it into an array.<br>

for example:<br>

```js
const callBtnsR = document.getElementsByClassName('call-btnR');
```

_When selecting elements by class, we **don't have to write the class selector(.)**_<br><br>

### 🎯**querySelector ::**<br><br>

It selects the **first element that matches** the name given on the **CSS selector**.<br>

for example:<br>

```js
const callBtnR = document.querySelector('.call-btnR');
```

This will give the first element from the html that posses the 'call-btn' class name.<br>

_When selecting elements by querySelector, we **have to write the css selector like . or #**_<br><br>

### 🎯**querySelectorAll ::**<br><br>

It selects **all the element that matches** the name given on the **CSS selector**. It gives a **nodelist** which looks like an array but its just an array like object. Its **not a live collection** means any change in the html file of that particular element will **not dynamically update the nodelist**. We can not use some specific array methods like map, filter etc.So if we want to use it like an array we need to convert it into an array.<br>

for example:<br>

```js
const callBtnsR = document.querySelectorAll('.call-btnR');
```

This will give all the element from the html that posses the 'call-btn' class name.<br>

_When selecting elements by querySelectorAll, we **have to write the css selector like . or #**_<br>

<hr>
<hr>

## 2️⃣❓How do you create and insert a new element into the DOM?<br><br>

## ✍🏻 <br>

We can create and insert a new element into the DOM in **three ways**:<br>

### 🎯**Using Create element ::**<br><br>

**At first create a html element**<br>

```js
const h2 = document.createElement('h2');
```

<br>

**then we can add content using textContent**<br>

```js
h2.textContent = 'Adding Text To h2';
```

<br>

**lastly we need to insert it into the DOM here we have to mention the parent name of the DOM element where we want to include h2 that we created. We can use append child to insert the h2 to the end of a parent or prepend to insert the h2 to the beginning of a parent.**<br>

```js
const sidebarContainerR = document.getElementById('sidebar-containerR');
sidebarContainerR.appendChild(h2);
```

<br><br>

### 🎯**Using insertAdjacentHTML ::**<br><br>

**At first create a html element**<br>

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

<br>

**Then select the parent element where you want to insert this html**<br>

```js
const sidebarContainerR = document.getElementById('sidebar-containerR');
```

<br>

**Then insert the html using insertAdjacentHTML which takes two parameter first one is the position like where you want to put the html and the second parameter is the html that you created**<br>

```js
sidebarContainerR.insertAdjacentHTML('afterbegin', HTMLR);
```

_In the sidebarContainer there will be now a child named sidebar-content. And it will be the first child among all the children of that particular parent._<br>

```js
sidebarContainerR.insertAdjacentHTML('beforeend', HTMLR);
```

_In the sidebarContainer there will be now a child named sidebar-content. And it will be the last child among all the children of that particular parent._<br>

```js
sidebarContainerR.insertAdjacentHTML('beforebegin', HTMLR);
```

_Just before the sidebarContainer there will be now a new element named sidebar-content. And none of them have any child parent relationship._<br>

```js
sidebarContainerR.insertAdjacentHTML('afterend', HTMLR);
```

_Just after the sidebarContainer there will be now a new element named sidebar-content. And none of them have any child parent relationship._<br><br>

### 🎯**Using innerHTML ::**<br><br>

**At first select the parent element where you want to insert this html**<br>

```js
const sidebarContainerR = document.getElementById('sidebar-containerR');
```

**Then add the html using innerHTML**<br>

```js
sidebarContainerR.innerHTML = '<h2>Adding Text using innerHTML</h2>';
```

This **=** will **overwrite** any previous **content** of that particular container. If we **don't** want to **alter** the previous **content** we can add it like this **+=**. This **innerHTML** will be added as a **child** of the container and **sibling** to others **children** of it.

<hr>
<hr>

## 3️⃣❓What is Event Bubbling and how does it work?<br><br>

## ✍🏻 <br>

### **Event Bubbling ::**<br>

Event Bubbling is the technique where when an **event** like click, keydown etc happen on a **child** element, the event will automatically **travel** to its **parent** and then it will **continue** its journey until it reaches the **root of the document**. It bubbles up from the child to the parent to the grandparent and so on and so on. **Default behavior** of javascript is event bubbling.<br>
for example:

```html
<div class="grandparent">
  <div class="parent">
    <button id="child">Event Bubble</button>
  </div>
</div>
<script>
  const grandparent = document.querySelector('.grandparent');
  const parent = document.querySelector('.parent');
  const child = document.querySelector('#child');

  grandparent.addEventListener('click', function () {
    console.log('Grandparent clicked');
  });

  parent.addEventListener('click', function () {
    console.log('Parent clicked');
  });

  child.addEventListener('click', function () {
    console.log('Child clicked');
  });
</script>
```

<br>

_Here if we click on the button we'll see in our console that all **three console.log** has been published._<br><br>

```text
Child clicked
Parent clicked
Grandparent clicked
```

<br>

This happens because when we clicked on the button it **first goes to its parent** Div **then** to its **grandparent** and it **continues** to travel upwards. This process is known as **event bubbling**.

<hr>
<hr>

## 4️⃣❓What is Event Delegation in JavaScript? Why is it useful?<br><br>

## ✍🏻<br>

### **Event Delegation ::**<br>

Delegation means to **transfer the responsibility** of a task from **one person to another**. So in Javascript, Event Delegation is an event being delegated from **child to it's parent**. **Parent** Element **handles** the event of **all its children**. Like if we had **multiple children** and all of them are **bound to some events** then we **don't add event listener** to all of the children instead we add **one event listener to the parent**, who in turns **listens** for the event in the **children**. We can **access** exactly where the **event fired** by using **e.target**. It will give the exact element where the event occurred.<br>

for example:

```html
<nav class="nav">
  <ul class="nav__links">
    <li class="nav__item">
      <a class="nav__link" href="#section--1">Features</a>
    </li>
    <li class="nav__item">
      <a class="nav__link" href="#section--2">Operations</a>
    </li>
    <li class="nav__item">
      <a class="nav__link" href="#section--3">Testimonials</a>
    </li>
    <li class="nav__item">
      <a class="nav__link" href="#section--4">Open account</a>
    </li>
  </ul>
</nav>
<script>
  document.querySelector('.nav__links').addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.classList.contains(nav__link)) {
      console.log('Link clicked');
    } else {
      console.log('Link is not clicked');
    }
  });
</script>
```

_Here Instead of selecting all the <a> links we add event listener in the grand parent <ul> who listens for the event. This way even of we add another <a> in the <ul> we wont have to modify our code. Then we check where the event actually fired using e.target. e.target is the position where the user clicked. We are checking whether e.target is the place that contains the class or not._

<br>

### 🎯**Why is it useful ::**<br><br>

It helps us maintain our code, improves readability and also makes our code clean. If we don't use event delegation then lets say we had hundreds of child element of a parent and all of them are bound to some event then we'd have to add event listener to all of them. It could affect our speed of the page and take too much space. Instead we identify the parent and add event listener to it and from there using e.target and event bubbling we can identify the exact children where the event occurred. This process also helps us when there is no children to attach event handler to. When page loads or when we need to dynamically create some action based on certain actions. This way we can prevent bugs.

<hr>
<hr>

## 5️⃣❓What is the difference between preventDefault() and stopPropagation() methods?<br><br>

## ✍🏻<br>

### 🎯**preventDefault() ::**<br><br>

To **stop a browser's default behavior** we use preventDefault(). Like if we had a form in our html and a **submit button**, the **default behavior** of that button is to **reload** the page. So when we use **preventDefault()** on that specific button for **click** event it **stops** its **default** action.<br>
for example: <br>

_In the previous event delegation example where after adding the event listener in the parent we wrote e.preventDefault(). As a result the default behavior of the clicking on a link like going to other page or reload has been stopped and we can add our operational codes in it._

### 🎯**stopPropagation() ::**<br><br>

We know when an event occurs, it generally bubbles up to its parent and it is the default behavior which is known as Event bubbling. The opposite of this behavior is called Event capturing which is when an event occurs the traveling is not upwards rather downwards. That means the event comes from the root of the document to grand parent to parent to child. So to **stop** these kind of **traveling upwards and downwards** along the **DOM** we use **stopPropagation()**. If we use it then the event wont propagate further from its position to neither parent nor ancestor.<br>

for example:

```html
<div class="grandparent">
  <div class="parent">
    <button id="child">Event Bubble</button>
  </div>
</div>
<script>
  const grandparent = document.querySelector('.grandparent');
  const parent = document.querySelector('.parent');
  const child = document.querySelector('#child');

  grandparent.addEventListener('click', function () {
    console.log('Grandparent clicked');
  });

  parent.addEventListener('click', function () {
    console.log('Parent clicked');
  });

  child.addEventListener('click', function (e) {
    e.stopPropagation();
    console.log('Child clicked');
  });
</script>
```

_Here we used e.stopPropagation() in the child as a result when we click on the child it wont bubble up to its parent and in console we'll only see one log has been published_

### ---------------------------- **THE END**----------------------------
