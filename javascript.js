let b = document.querySelector("h2")

let a = fetch('https://jsonplaceholder.typicode.com/albums')
.then(res => res.json ())
.then(data => {
    data.forEach(e => {
        document.write(b.innerHTML = `
    <h2>${e.title}</h2>`)
    });
})