import toolkit from './lib/toolkit'
import { button } from './views'

export default () => {
  try{
    button(toolkit)
  }catch(e){
    console.log('xinspector error --->', e)
  }
}