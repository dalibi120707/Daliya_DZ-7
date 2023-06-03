//старый код
// const som = document.querySelector('#som')
// const usd = document.querySelector('#usd')
// const euro = document.querySelector('#euro')
// const TRY = document.querySelector('#TRY')
// const convert = (elem, target, target2, target3, isTrue) => {
//     elem.oninput = () => {
//         const request = new XMLHttpRequest()
//         request.open("GET", "data.json")
//         request.setRequestHeader("Content-type", "application/json")
//         request.send()
//         request.onload = () => {
//             const response = JSON.parse(request.response)
//             if (isTrue === 1) {
//                 target.value = ( elem.value / response.usd ).toFixed(2)
//                 target2.value = ( elem.value / response.euro ).toFixed(2)
//                 target3.value = ( elem.value / response.TRY ).toFixed(2)
//             } else if (!isTrue) {
//                 target.value = ( elem.value * response.usd ).toFixed(2)
//                 target2.value = ( elem.value * (response.usd / response.euro ) ).toFixed(2)
//                 target3.value = ( elem.value * (response.usd / response.TRY ) ).toFixed(2)
//             } else if (isTrue === 2) {
//                 target.value = ( elem.value * response.euro ).toFixed(2)
//                 target2.value = ( elem.value * (response.euro / response.usd) ).toFixed(2)
//                 target3.value = ( elem.value * (response.euro / response.TRY) ).toFixed(2)
//             } else if (isTrue === 3) {
//                 target.value = ( elem.value * response.TRY ).toFixed(2)
//                 target2.value = ( elem.value * (response.TRY / response.usd) ).toFixed(2)
//                 target3.value = ( elem.value * (response.TRY / response.euro) ).toFixed(2)
//             }
//             elem.value === '' && (target.value = target2.value = target3.value = '')
//         }
//     }
// }
// convert(som, usd,  euro, TRY, 1)
// convert(usd, som, euro, TRY)
// convert(euro, som, usd, TRY,2)
// convert(TRY, som, usd, euro, 3)

//переделала на async и на await
const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const euro = document.querySelector('#euro')
const TRY = document.querySelector('#TRY')

const convert = async (elem, target, target2, target3, isTrue) => {
  elem.oninput = async () => {
    try {
      const response = await fetch('data.json')
      if (!response.ok){
        throw new Error('Ошибка при выполнения запроса')
      } const data = await response.json()


        if (isTrue === 1) {
          target.value = (elem.value / response.usd).toFixed(2)
          target2.value = (elem.value / response.euro).toFixed(2)
          target3.value = (elem.value / response.TRY).toFixed(2)
        } else if (isTrue === false) {
          target.value = (elem.value * response.usd).toFixed(2)
          target2.value = (elem.value * (response.usd / response.euro)).toFixed(2)
          target3.value = (elem.value * (response.usd / response.TRY)).toFixed(2)
        } else if (isTrue === 2) {
          target.value = (elem.value * response.euro).toFixed(2)
          target2.value = (elem.value * (response.euro / response.usd)).toFixed(2)
          target3.value = (elem.value * (response.euro / response.TRY)).toFixed(2)
        } else if (isTrue === 3) {
          target.value = (elem.value * response.TRY).toFixed(2)
          target2.value = (elem.value * (response.TRY / response.usd)).toFixed(2)
          target3.value = (elem.value * (response.TRY / response.euro)).toFixed(2)
        }

        if (elem.value === '') {
          target.value = ''
          target2.value = ''
          target3.value = ''
        }
      } catch (error) {
      console.error(error)
    }
  }
}

convert(som, usd, euro, TRY, 1)
convert(usd, som, euro, TRY, false)
convert(euro, som, usd, TRY, 2)
convert(TRY, som, usd, euro, 3)
