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
