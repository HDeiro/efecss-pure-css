function addClass(i){
  let e = document.getElementById(i);
  let forever = document.getElementById(5);
  let elementClass = e.value;
  let target = document.getElementById("target");
  target.className = `rounded-rectangle ${forever.checked ? 'forever' : ' '} `;
  i != 5 ? target.classList.add(elementClass) : 0;  
}