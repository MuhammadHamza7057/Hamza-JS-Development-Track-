// The change in the state of the object  is call evnets.
// MOstly when code are excute and some can perform some action the event occurs.
//There are differnet events in js for example mouseClick, keyboard, double click, form submited, and print event etc.
// if we deals with this event this is called the event handling in js.
// first priority is the js and than inline js for example we write.
//  the same event in inline and than write it in js first run the js becuase the js priority is high than inline js.



// ============================
// 1️⃣ Mouse Events 🖱️
// ============================

// Click event (fires when an element is clicked)
document.getElementById("box").addEventListener("click", function() {
  console.log("Box Clicked!");
  // also add the alert
  alert("Box Clicked!");
});

// Double click event
document.getElementById("box").addEventListener("dblclick", function() {
  console.log("Box Double Clicked!");
});

// Mouse enter event (when the mouse enters an element)
document.getElementById("box").addEventListener("mouseenter", function() {
  console.log("Mouse Entered the Box!");
});

// Mouse leave event (when the mouse leaves an element)
document.getElementById("box").addEventListener("mouseleave", function() {
  console.log("Mouse Left the Box!");
});

// ============================
// 2️⃣ Keyboard Events ⌨️
// ============================

// Keydown event (when a key is pressed down)
document.addEventListener("keydown", function(event) {
  console.log("Key Pressed: " + event.key);
});

// Keyup event (when a key is released)
document.addEventListener("keyup", function(event) {
  console.log("Key Released: " + event.key);
});

// ============================
// 3️⃣ Form Events 📝
// ============================

// Change event (when input value changes)
document.getElementById("myInput").addEventListener("change", function() {
  console.log("Input Changed: " + this.value);

});

// Submit event (when form is submitted)
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevents the form from actually submitting
  console.log("Form Submitted!");
});

// Focus event (when input is focused)
document.getElementById("myInput").addEventListener("focus", function() {
  console.log("Input Focused!");
});

// Blur event (when input loses focus)
document.getElementById("myInput").addEventListener("blur", function() {
  console.log("Input Lost Focus!");
});

// ============================
// 4️⃣ Window & Document Events 🌍
// ============================

// Page load event (when the page is fully loaded)
window.addEventListener("load", function() {
  console.log("Page Loaded!");
});

// Resize event (when the window is resized)
window.addEventListener("resize", function() {
  console.log("Window Resized!");
});

// Scroll event (when the page is scrolled)
window.addEventListener("scroll", function() {
  console.log("Page Scrolled!");
});

// ============================
// 5️⃣ Clipboard Events 📋
// ============================

// Copy event (when text is copied)
document.addEventListener("copy", function() {
  alert("Text Copied!");
});

// Paste event (when text is pasted)
document.addEventListener("paste", function() {
  alert("Text Pasted!");
});

// ============================
// 6️⃣ Drag & Drop Events 🖱️📦
// ============================

// Drag start event (when dragging starts)
document.getElementById("dragItem").addEventListener("dragstart", function() {
  console.log("Dragging Started!");
});

// Drop event (when an item is dropped)
document.getElementById("dropZone").addEventListener("drop", function(event) {
  event.preventDefault();
  console.log("Item Dropped!");
});

// Dragover event (prevents default behavior to allow dropping)
document.getElementById("dropZone").addEventListener("dragover", function(event) {
  event.preventDefault();
});
