let tasks=document.getElementById('tasks');
let txt=document.getElementById('field');

function add(e){
    var newtask=document.createElement('div');
    newtask.innerHTML=`<h3 style="display:inline;font-family: 'Edu QLD Beginner', cursive;
    font-family: 'Lobster', cursive;">${txt.value}</h3><button onclick="edit(this)" style="border:none;border-radius:10px;"><i class="bi bi-pencil-square"></i></button><button onclick="dlt(this)" style="border:none;border-radius:10px;"><i class="bi bi-x-circle-fill"></i></button>`
    
    newtask.style="display:grid;grid-gap:5px;grid-template-columns:5fr 1fr 1fr;padding:2em;margin:2em;background:pink;border:none;border-radius:40px"
   
    tasks.appendChild(newtask);
    txt.value="";
}
function dlt(e){
    e.parentElement.remove();
}
function edit(e){
    var entry;
    entry=prompt("Enter to Edit");
    e.parentElement.innerHTML=`<h3 style="display:inline">${entry}</h3><button onclick="edit(this)" style="border:none;border-radius:10px;"><i class="bi bi-pencil-square"></i></button><button onclick="dlt(this)" style="border:none;border-radius:10px;"><i class="bi bi-x-circle-fill"></i></button>`;
}