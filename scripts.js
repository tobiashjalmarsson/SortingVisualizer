
// Global variables
var sorting_container  = document.getElementById("sortingContainer");
let elements = [];
var in_progress = false;
/*delay function which delays ms milliseconds*/
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Generate the divs so that we can sort them
// function to add, take an input value to decide the sice of the array
function GenerateArray() {
    //get a reference for the container in which we will create the divs/bars
    let main_node = document.getElementById("sortingContainer");
    // get input from slider to determine the number of divs/bars
    let number_of_elements = document.getElementById("numElements").value;
    /*In the case that we already have generated bars we want to remove
    thoose and then generate new bars */
    if(in_progress == true){
        main_node.innerHTML = "";
        in_progress = false;
    }
    in_progress = true;
    // placeholder array
    let array = [];
    let height = 0;    
    for(let i = 0; i < number_of_elements; i++){
        // for each element we add we set a certain style, perhaps move this to a seperate function
        height = Math.floor(Math.random()*101) * 5;
        var element = document.createElement("D");
        element.classList.add("sorting_element");
        element.style.height = "" + height + "px";
        element.style.width = "" + 100/(2*number_of_elements) + "%";
        element.style.margin = "" + 1 + "px";
        sorting_container.appendChild(element);
        array.push(height);
    }
    elements = array;
}

// Animation function for when arrays are sorted
async function finished(){
    // get all divs in the sortingContainer and store them in all_items
    let all_items = document.getElementById("sortingContainer");
    for(let i = 0; i < all_items.children.length; i++){
        // change color to indicate that we are done
        all_items.children[i].style.backgroundColor = "green";
        //delay for 15 ms
        await sleep(15);
    }
}


// Sorting functions

async function insertion_sort(){
    // get the input from the slider which determines the speed
    let speed = document.getElementById("speed").value;
    speed = 200 - speed;
    // get a reference for the container of our divs.
    // perhaps change this to document.getElementById("sortingContainer").children to make code cleaner
    let all_items = document.getElementById("sortingContainer");
    const low = 0;
    // get the number of divs of our container
    const high = all_items.children.length - 1;
    //sorting
    for(let i = low + 1; i <= high; i++){
        let value = all_items.children[i];
        // set style to blue to indicate that it's being moved
        value.style.backgroundColor = "blue";
        await sleep(speed);
        let j = i;
        while(j > low && all_items.children[j-1].offsetHeight > value.offsetHeight){
            all_items.insertBefore(all_items.children[j], all_items.children[j-1]);
            await sleep(speed);
            j--;
        }
        all_items.insertBefore(all_items.children[j], value);
        // when it's in place, change color to greenyellow
        all_items.children[j+1].style.backgroundColor = "greenyellow";
        value.style.backgroundColor = "greenyellow";
    }
    finished();

   
}

async function bubble_sort(){
    all_items = document.getElementById("sortingContainer");
    console.log(all_items.children.length);
    var len = all_items.children.length - 1;
    let value;
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len - i; j++) {
            value = all_items.children[j];
            //value.style.backgroundColor = "orange";
            await sleep(10);
            if(value.offsetHeight > all_items.children[j+1].offsetHeight) {
                await sleep(10);
                sorting_container.insertBefore(all_items.children[j+1], value);
                //value.style.backgroundColor = "greenyellow";
            }
        }
    }
    finished();
}


async function merge_sort(left, right){
    console.log("left: " + left + " , right: " + right);
    if(left < right){
        let middle = Math.round((right + left) / 2);
        merge_sort(1, middle),
        merge_sort(middle + 1, right);

        //merge(1, middle, right);
    }

}
// to be continued
function merge(left, middle, right){
    let size_one = middle - left - 1;
    let size_two = right - middle;

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