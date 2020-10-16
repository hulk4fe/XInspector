import toolkit from './lib/toolkit'
import { button } from './views'

export default () => {
  try{
    if(document.querySelector('.xinspector') === null){
      button(toolkit)
    }
  }catch(e){
    console.log('xinspector error --->', e)
  }
}