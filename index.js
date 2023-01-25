const input = document.querySelector('input')
const li = document.querySelectorAll('li')


input.addEventListener('input', ()=>{
    let filter = input.value.toLowerCase()
    li.forEach(item =>{
        console.log(item.textContent);
        let names = item.textContent.toLowerCase()
        if (names.indexOf(filter) > -1) {
            item.style.display = ''
        } else {
            item.style.display = 'none';
        }
    })
})

