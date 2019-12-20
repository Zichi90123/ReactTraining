function choice(items) {
    let idx = Math.floor(Math.floor() * items.lenght);
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