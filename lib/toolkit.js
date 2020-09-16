export default () => {
  try{
    const arrlike = document.querySelectorAll("*"),
          arr = Array.prototype.slice.call(arrlike)
    arr.forEach(el=>{
      el.style.outline =
      "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16);
    })
  }catch(e){
    console.log('toolkit', e)
  }
}