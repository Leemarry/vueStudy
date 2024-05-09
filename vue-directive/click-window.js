/*
 * @Descripttion: 
 * @version: 
 * @Author: Eugene
 * @Date: 2024-05-09 16:51:15
 * @LastEditors: Andy
 * @LastEditTime: 2024-05-09 17:40:32
 */
/*
 * @Descripttion:
 * @version:
 * @Author: Eugene
 * @Date: 2024-05-09 11:46:56
 * @LastEditors: Andy
 * @LastEditTime: 2024-05-09 13:07:18
 */
import { nextTick } from 'vue'


export default function useClickWindowDirective (app) {
  app.directive('click-window',
  
  async (el) => {
    await nextTick()

    el.style.background = 'red'
    el.style.cursor = 'pointer'; // Adding cursor pointer style

    // Adding hover effect
    el.addEventListener('mouseenter', () => {
      el.style.color = 'aquamarine';
    });

    // Removing hover effect
    el.addEventListener('mouseleave', () => {
      el.style.color = ''; // Reverting to default color
    });
  }
  
  )
}


// 方式二

export default function useClickWindowDirective (app) {
  app.directive('click-window',{
    mounted: (el) => {
       //   await nextTick()

    el.style.background = 'red'
    el.style.cursor = 'pointer'; // Adding cursor pointer style

    // Adding hover effect
    el.addEventListener('mouseenter', () => {
      el.style.color = 'aquamarine';
    });

    // Removing hover effect
    el.addEventListener('mouseleave', () => {
      el.style.color = ''; // Reverting to default color
    });
      
    }
  }
  )
}
