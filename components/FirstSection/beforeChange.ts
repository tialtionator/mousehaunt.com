import config from '../../utils/config'

export default function beforeChange({from, to}: {from:number, to: number}) {
  const first = document.getElementsByClassName('first') as unknown as HTMLElement[];
  console.log({from, to})
  const ticker = 10
  const steps = 3
  let i = 0
  if(from === 0 && (to === 1 || to === 2)) {
    let id = setInterval(() => {
      i++
      if(i >= ticker/steps) {
        Array.from(first).map(element => {
          element.style.opacity =  '0'
          element.style.display =  'none'
        })
        clearInterval(id)
      }
      else {
        const opacity = (1 - steps*i/ticker).toString()
        console.log(opacity)
        Array.from(first).map(element => element.style.opacity = opacity)
      }
    }, config.TRANSITION_DURATION/ticker);
  }
  else if(from === 1 && to === 0) {
    let id = setInterval(() => {
      i++
      if(i >= ticker/steps) {
        Array.from(first).map((element, i) => {
          element.style.opacity =  '1'
          element.style.display =  i === 0 ? 'flex' : 'block'
        })
        clearInterval(id)
      }
      else {
        const opacity = (0 + steps*i/ticker).toString()
        console.log(opacity)
        Array.from(first).map(element => element.style.opacity = opacity)
      }
    }, config.TRANSITION_DURATION/ticker);
  }
}
