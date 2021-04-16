
/** Get a random item */
function getRandomChoice (items) {
    let idx = Math.floor(Math.random() * items.length);
    return items[idx];
}

/** Remove an item from items 
 *  
 *  Returns an array w/o first occurrence of that item
 * 
 *  If item not found, returns undefined.
*/
function remove(item, items) {
    for(let i = 0; i < items.length; i++) {
        if(item === items[i]) {
            return [...items.slice(0, i), ...items.slice(i + 1)];
        }
    }
}

export {getRandomChoice, remove}