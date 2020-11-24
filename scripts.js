
// Global variables
var sorting_container  = document.getElementById("sortingContainer");
let elements = [];
var in_progress = false;

/*sleep(ms) is used in the sorting functions to make them
more visibly appealing */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Generate the divs so that we can sort them
// function to add, take an input value to decide the sice of the array
function GenerateArray() {
    let main_node = document.getElementById("sortingContainer");
    if(in_progress == true){
        main_node.innerHTML = "";
        in_progress = false;
    }
    in_progress = true;
    let array = [];
    let height = 0;    
    for(let i = 0; i < 100; i++){
        height = Math.floor(Math.random()*101) * 5;
        var element = document.createElement("D");
        element.classList.add("sorting_element");
        element.style.height = "" + height + "px";
        sorting_container.appendChild(element);
        array.push(height);
    }
    elements = array;
}

// Sorting functions

async function insertion_sort(){
    all_items = document.getElementById("sortingContainer");
    const low = 0;
    const high = all_items.children.length - 1;
    for(let i = low + 1; i <= high; i++){
        let value = all_items.children[i];
        value.style.backgroundColor = "blue";
        await sleep(0);
        let j = i;
        while(j > low && all_items.children[j-1].offsetHeight > value.offsetHeight){
            all_items.insertBefore(all_items.children[j], all_items.children[j-1]);
            await sleep(0);
            j--;
        }
        all_items.insertBefore(all_items.children[j], value);
        all_items.children[j+1].style.backgroundColor = "greenyellow";
        value.style.backgroundColor = "greenyellow";
    }

   
}
/* 
async function bubble_sort(){
    let arr = [2,4,1,10,12,7,8,5,5,10];
    all_items = document.getElementById("sortingContainer");
    console.log(arr);
    //const length = arr.length - 1;
    const length = all_items.children.length - 1;
    for(let i = 0; i < length; i++){
        for(let j = 0; j < length - i; j++){
            //if(arr[j+1] < arr[j]){
            if(all_items.children[j+1].offsetHeight < all_items.children[j].offsetHeight){
            // swap
            //let temp = arr[j];
            let temp = all_items.children[j]
            arr[j] = arr[j+1];
            all_items.children[j] = all_items.children[j+1];
            //arr[j+1] = temp;
            all_items.children[j] = temp;
            }            
        }
    }
    console.log(arr);
}
*/

async function merge_sort(){
}

async function quick_sort(){

}



/* 
function swap(){
    const all_items = document.getElementById("sortingContainer");
    console.log(all_items.children[2]);
    one_item = all_items.children[2];
    console.log(one_item.offsetHeight);
    console.log(all_items.children.length);


    // Create a new element
    // replaces child number 2 in all_items with child number 3
    all_items.replaceChild(all_items.children[2], all_items.children[3]);

}
*/