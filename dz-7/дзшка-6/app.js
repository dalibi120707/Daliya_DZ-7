//старый код
// const block = document.querySelector('.block')
// const btnPrev = document.querySelector('.btn-prev')
// const btnNext = document.querySelector('.btn-next')
// let count = 0
// let result = []
//
// const dataChabge = (el) => {
//     const card = document.querySelector('.card')
//   card.querySelector('h2').innerText = result[el].title
//   card.querySelector('span').innerText = result[el].id
//   card.querySelector('h3').innerText = result[el].completed
// }
//
// const fetchData = () => {
//     fetch(`https://jsonplaceholder.typicode.com/todos`)
//         .then(response => response.json())
//         .then(data => {
//           result = data
//             const div = document.createElement('div')
//             div.setAttribute('class', 'card')
//             div.innerHTML = `
//         <h2>${data[0].title}</h2>
//         <span>${data[0].id}</span>
//         <h3>${data[0].completed}</h3>
//       `
//             block.append(div)
//     console.log('\t\tTodos:\n', result)
//
//         })
// }
// fetchData()
// btnNext.onclick = () => {
//   if (count < 199) {
//    count++
//   dataChabge(count)
//   }
// }
// btnPrev.onclick = () => {
//   if (count > 0){
//     count--
//     dataChabge(count)
//   }
// }
//
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'GET',
//     headers: {'Content-type' : 'application/json'}
// }).then((response) => response.json()
// ).then((data) => {
//     console.log('\t\tPosts:\n', data)
// })

//переделала на async и на await
const block = document.querySelector('.block');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
let count = 0;
let result = [];

const dataChange = (el) =>
{
  const card = document.querySelector('.card');
  card.querySelector('h2').innerText = result[el].title;
  card.querySelector('span').innerText = result[el].id;
  card.querySelector('h3').innerText = result[el].completed;
};

const fetchData = async () =>
{
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    result = data;

    const div = document.createElement('div');
    div.setAttribute('class', 'card');
    div.innerHTML = `
      <h2>${data[0].title}</h2>
      <span>${data[0].id}</span>
      <h3>${data[0].completed}</h3>
    `;
    block.append(div);
    console.log('\t\tTodos:\n', result);
  } catch (error) {
    console.error('Error:', error);
  }
};

const fetchPosts = async () =>
{
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
    });
    const data = await response.json();
    console.log('\t\tPosts:\n', data);
  } catch (error) {
    console.error('Error:', error);
  }
};

fetchData();
btnNext.onclick = () =>
{
  if (count < 199) {
    count++;
    dataChange(count);
  }
};
btnPrev.onclick = () =>
{
  if (count > 0) {
    count--;
    dataChange(count);
  }
};

fetchPosts();
