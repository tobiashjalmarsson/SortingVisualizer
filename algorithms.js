
export async function insertion_sort2(){
    all_items = document.getElementById("sortingContainer");
    const low = 0;
    const high = all_items.children.length - 1;
    for(let i = low + 1; i <= high; i++){
        let value = all_items.children[i];
        value.style.backgroundColor = "blue";
        await sleep(40);
        let j = i;
        while(j > low && all_items.children[j-1].offsetHeight > value.offsetHeight){
            all_items.insertBefore(all_items.children[j], all_items.children[j-1]);
            await sleep(40);
            j--;
        }
        all_items.insertBefore(all_items.children[j], value);
        all_items.children[j+1].style.backgroundColor = "greenyellow";
        value.style.backgroundColor = "greenyellow";
    }
}

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }