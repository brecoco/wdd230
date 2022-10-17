const button = document.querySelector('#btn1');
const input = document.querySelector('#favchap');
const output = document.querySelector('.list');

button.addEventListener('click', () => {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = input.value;
    deleteButton.textContent = "❌";
    document.getElementById('favchap').value = "";
    li.append(deleteButton);
    output.append(li);
    
    deleteButton.addEventListener('click', () => {
        output.removeChild(li);
        input.focus();
    });
});