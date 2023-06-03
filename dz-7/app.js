const fetchData = async () => {try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const dataArray = await response.json()
        dataArray.map(item  => {
            const card = document.createElement('div')
            card.setAttribute('class', 'card')
            card.innerHTML = `<img src="https://picsum.photos/400/200?random=" alt="#"><h3>${item.title}</h3><p>${item.body}</p>`
            document.querySelector('.content').append(card)})} catch (e) {console.log(e)}}
