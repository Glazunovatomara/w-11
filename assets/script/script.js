
const writeList = () => {
    const inputValue = document.getElementById('input').value;

    const items = document.getElementById('items');

    const newItem = document.createElement('li');
    newItem.textContent = inputValue;
    items.append(newItem);
    newItem.classList.add('main__list_items-item');

    document.getElementById('input').value = ''
}

writeList()


const list = document.querySelector('ul');

list.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('inert');
    }
});