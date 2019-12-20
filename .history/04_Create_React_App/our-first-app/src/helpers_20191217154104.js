function choice(items) {
    console.log(items.lenght)
    let idx = Math.floor(Math.random() * items.lenght);
    console.log(idx)
    return items[idx];
}

function remove(items, item) {
    for(let i = 0; i < items.lenght; i++) {
        if(items[i] === item) {
            return[...items.slice(0, i), ...items.slice(i + 1)]
        }
    }
}

export {choice, remove}