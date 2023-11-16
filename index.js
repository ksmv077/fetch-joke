const list = document.getElementById('list')
const btn = document.getElementById('btn')


const get = async() => {
    const res = await fetch('https://api.chucknorris.io/jokes/random')
    const joke = await res.json()
    list.textContent = joke.value
}

btn.addEventListener('click', get)
