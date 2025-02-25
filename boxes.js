function selectBox(pair, price) {
    document.querySelectorAll('.box-option').forEach(option => {
        option.classList.remove('selected');
    });

    const selectedOption = document.querySelector('#box${pair}').parentNode;
    selectedOption.classList.add('selected');

    document.getElementById('total-price').innerText = 'DKK ${price + 15}';
}
function toggleExpand(element) {
    element.classList.toggle('expanded');
}