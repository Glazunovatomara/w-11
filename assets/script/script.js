let writeList = () => {
    const inputValue = document.getElementById('input').value;
    const list = document.getElementById('items');
    const newElement = document.createElement('li');
    newElement.textContent = inputValue;
    list.append(newElement)
}
writeList()
