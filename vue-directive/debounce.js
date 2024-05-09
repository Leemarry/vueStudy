const debounce = {
    beforeMount: function(el, binding) {
      let timer;
      const { handler, delay } = binding.value;
      el.addEventListener("click", function(){

        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
            handler(); // 调用传递的函数
          
        }, delay);
      });
    }
  }
  
  export default debounce;
