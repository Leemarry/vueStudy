import Focus from './Focus'
import highlight from './highlight';
import debounce from './debounce'

const directives = {  //汇总自定义指令
    Focus,//聚焦指令
    highlight,
    debounce
  }
   
  export default {  //导出自定义指令
    install(app) {// 以安装的方式插到app中
      Object.keys(directives).forEach((key) => {    // 遍历directives对象的key
        app.directive(key, directives[key])  // 将每个directive注册到app中
      })
    }
  }



// import useClickWindowDirective from './click-window'

// export function useDirectives (app) {
//   useClickWindowDirective(app)
//   //......
// }

// 如果是ts
// #region

import { App } from 'vue'
import Focus from './Focus'


const directivesList :any= {  //汇总自定义指令
    Focus,//聚焦指令
  }

  
const directives = {
  install: function (app: App<Element>) {
      Object.keys(directivesList).forEach(key => {
          // 注册自定义指令
          app.directive(key, directivesList[key]);
      });
  }
};

export default directives;
// #endregion



import type { Directive, DirectiveBinding } from "vue";

interface ElType extends HTMLElement {
  // 扩展了 HTMLElement 接口的属性
  copyData: string | number;
  __handleClick__: any;
}

const  Focus :Directive= {
  mounted (el :ElType ,binding :DirectiveBinding) {
    console.log('red', el)
    el.style.background = 'yellow'
  }
}
export default  Focus

