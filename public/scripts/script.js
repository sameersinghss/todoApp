let input = document.getElementById('input')
input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault()
        addTodo()
    }
})

function addTodo() {
    let x = input.value.replace(/^\s*$[\n\r]{1,}/gm, '');
    if (x === "") {
        input.value = ""
        alert("Enter something...")
        return;
    }
    let obj = new Object()
    obj.name = x;
    obj.status = -1
    const xhr = new XMLHttpRequest()
    xhr.open("POST", "/add-todo")
    xhr.setRequestHeader("Content-Type", "application/json")
    console.log(JSON.stringify(obj))
    xhr.send(JSON.stringify(obj))
    xhr.addEventListener('load',()=>{
        window.location.reload()
    })
    input.value = ""
}

function toggleTask(index, url) {
    const xhr = new XMLHttpRequest()
    xhr.open('POST', url)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(JSON.stringify({ index: index }))
}

function changeListener(e, ind) {
    if (e.checked) {
        toggleTask(ind, "/completed-todo")
        e.nextElementSibling.onclick = null
        console.dir(e)
        e.parentElement.parentElement.classList.remove('pending')
        e.parentElement.parentElement.classList.add('finished')
    }
    else {
        toggleTask(ind, '/pending-todo')
        e.nextElementSibling.onclick = ()=>{removeListener(e.nextElementSibling,ind)}
        console.dir(e)
        e.parentElement.parentElement.classList.add('pending')
        e.parentElement.parentElement.classList.remove('finished')
    }
}

function removeListener(e, index) {
    if (e.previousElementSibling.checked)
        return
    console.dir(e)
    console.log("Delete " + index + "triggered")
    const xhr = new XMLHttpRequest()
    xhr.open('POST','/remove-todo')
    xhr.setRequestHeader('Content-Type','application/json')
    xhr.send(JSON.stringify({index : index}))
    xhr.addEventListener('load',()=>{
        window.location.reload()
    })
}