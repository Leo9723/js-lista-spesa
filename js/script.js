const list = [
    'peperoncino',
    'acqua',
    'farna',
    'lievito',
    'olio',
    'pan di via'
]

const shoppinglist = document.querySelector('.shopping-list');

let i = 0;

while(i < list.length) {
    let item_list = list[i]
    i++
    let complete_list = document.createElement('li')
    complete_list.innerText = item_list
    shoppinglist.append(complete_list);
}