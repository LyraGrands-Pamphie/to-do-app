const clear = document.querySelector(".clear");
const dataElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Classes names
const CHECK = "fa-check-circle";
const UNCHECK ="fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// Variables
let LIST, id;

// get items from local storage 
let data = localStorage.getItem("TODO");
localStorage.setItem('key', 'value');
let variable = localStorage.getItem('key');


let data = localStorage.getItem("TODO");
// check if date is not empty
if (data){
    LIST = JSON.parse(data);
    loadToDo(LIST); // set the id to the last one in the list
    id = LIST.length; // load the list to the user interface


}else{//if date isn't empty
    LIST = [];
    id = 0
   
    // load items to the user's interface
}
function loadlist( array ) {
    array.forEach(function(item){
                         addToDo(item.name, item.id, item.done, item.trash );

                         
    });      
}
// clear the local storage
    clear.addEventListener('click', function(){
    localStorage.clear();
    location.reload();
});


// Show todays date

let options = { weekday: 'long', month:'short', day:'numeric'};
let today = new Date();
dataElement.innerHTML = today.toLocaleDateString("en-US", Option);

// add to do function
function addToDo( toDo, id, done, trash){
    if (trash) {return;  }
    const DONE = done ? CHECK : UNCHECK;
    const LINE  = done ? LINE_THROUGH : "";

    const item = `<li class="item">
            <i class="fa ${DONE} complete" job="complete" id="${id}"></i>
            <p class="text ${LINE}"> ${toDo}</p>
            <i class="de fa fa-trash-o" job="delete"></i>
</li>`
const position="beforeend";

list.insertAdjacentHTML(position, text);

}

// add an item to the list user the enter key
document.addEventListener("keyup", function(event){
    if(event.keyCode == 13) {
            const toDo = input.Value;

            //if the input inn't empty
            if (toDo){
                addToDo(toDo, id, false, false);
                LIST.push(
                    {
                        name: toDo,
                        id: id,
                        done: false,
                        trash: false
                    }
                );
                // add items to localstorage (this code must be added where the List array is updated)
                localStorage.setItem("TODO",  JSON.stringify(LIST));
            }
            input.value ="";
            id++;
    }
});

// complete to-do
function completeToDo(element){
    element.classList.toggle (CHECK);
    element.classList.toggle (UNCHECK);
    elemet.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
 LIST[element.id].done = LIST[element.id].done ? false : true;
}

// remove to-do 

function removeToDo(element) {
    element.partentNode.parentNode.removeChild(element.parentNode);
    LIST [element.id].trash = true;
}

// target the items created dynaically 
list.addEventListener("click", function(event){
    let element = event.target; // return the clicked element inside list
    const elementJOB = event.target.attributes.job.value; // complete or delete
    if(elementJOB =="complete"){
       completeToDo (element);
    }else if(element+JOB == "delete"){
        removeToDo();  
    }

    // add items to localstorage (this code must be added where the List array is updated)
    localStorage.setItem("TODO",  JSON.stringify(LIST));
});


Element.insertAdjacetHTML(position, text);

