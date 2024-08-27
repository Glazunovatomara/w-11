const btn = document.querySelector('.main__list_form-btn');

const writeList = () => {
    const input = document.getElementById('input');
    let inputValue = input.value;

    if(input.value === ''){
        return
    }

    const items = document.getElementById('items');

    const newItem = document.createElement('li');
    newItem.textContent = inputValue;
    items.append(newItem);
    newItem.classList.add('main__list_items-item');

    input.value = ''
}

btn.addEventListener('click',writeList);

const list = document.querySelector('ul');

list.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('inert');
    }
});