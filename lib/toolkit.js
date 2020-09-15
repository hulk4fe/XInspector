export default () => {
  document.querySelectorAll("*").forEach(el=>{
    el.style.outline =
    "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16);
  })
}