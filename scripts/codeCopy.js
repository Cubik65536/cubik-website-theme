"use strict";

// code block copy
hexo.extend.injector.register("body_end", function () {
  return `
  <style>
    .highlight {
      position: relative;
    }
    .highlight .code .copy-btn{
      position: absolute;
      top: 0;
      right: 0;
      padding: 5.5px 0.6rem;
      opacity: 0.25;
      font-weight: 1rem;
      color: var(--theme);
      cursor: pointer;
      transination: opacity 0.3s;
    }
    .highlight .code .copy-btn:hover{
      color: var(--text-code);
      opacity: 0.75;
    }
    .highlight .code .copy-btn.success {
      color: var(--swiper-theme-color);
      opacity: 0.75;

    }
    
  </style>
  <script>
    const codeElementArr = document.querySelectorAll('.code')
    const path = window.location.href.toString().split(window.location.host)[1]
    codeElementArr.forEach(code => {

      const codeBeforeWidth = window.getComputedStyle(code, '::before').width.split('px')[0]
      const codeBeforePadding = window.getComputedStyle(code, '::before').padding.split(' ').pop().split('px')[0]
  
      // copy btn 
      const codeCopyBtn = document.createElement('div')
      codeCopyBtn.classList.add('copy-btn')
      codeCopyBtn.style.right = Number(codeBeforeWidth) + Number(codeBeforePadding) * 2 + 'px'
      if (path.startsWith("/en")) {
        codeCopyBtn.innerText = 'Copy Code'
      } else {
        codeCopyBtn.innerText = '复制代码'
      }
      code.appendChild(codeCopyBtn)
  
      codeCopyBtn.addEventListener('click', async () => {
        const currentCodeElement = code.children[0]?.innerText
        await copyCode(currentCodeElement)

        if (path.startsWith("/en")) {
          codeCopyBtn.innerText = 'Successfully Copied'
        } else {
          codeCopyBtn.innerText = '复制成功'
        }

        codeCopyBtn.classList.add('success')

        setTimeout(() => {
          if (path.startsWith("/en")) {
            codeCopyBtn.innerText = 'Copy Code'
          } else {
            codeCopyBtn.innerText = '复制代码'
          }
          codeCopyBtn.classList.remove('success')
        },1000)
      })
    })
    
    async function copyCode(currentCode) {
      console.log(currentCode)
      console.log('复制代码 / Code Copied')
      if (navigator.clipboard) {
        try {
          await navigator.clipboard.writeText(currentCode)
        } catch (error) {
          // 未获得用户许可
          console.error(error)
        }
      } else {
        console.error('当前浏览器不支持此 api')
        console.error('Current Browser does not support this API')
      }
    }
  </script>
  `;
});
