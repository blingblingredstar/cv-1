const html = document.querySelector('#html')
const style = document.querySelector('#style')

const styleStr = `/*
大家好，我叫刘勇
接下来由我来画一个太极图
首先准备一个div
*/
#tai-chi {
  --radius: 200px;
  width: var(--radius);
  height: var(--radius);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
}
/*
接下来把div变为圆形
*/
#tai-chi {
  border-radius: 50%;
}
/*
太极图是由阴阳两鱼组成的
一黑一白
*/
#tai-chi {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 1) 100%
  );
}
/*
添加鱼眼
*/
#tai-chi::before {
  width: calc(var(--radius) / 2);
  height: calc(var(--radius) / 2);
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 25%,
    rgba(255, 255, 255, 1) 25%,
    rgba(255, 255, 255, 1) 100%
  );
}

#tai-chi::after {
  width: calc(var(--radius) / 2);
  height: calc(var(--radius) / 2);
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 25%,
    rgba(0, 0, 0, 1) 25%,
    rgba(0, 0, 0, 1) 100%
  );
}

/*
好了，太极图画完了
*/`

let tmpStr = ''
let n = 0
const delay = 16

const display = () => {
  setTimeout(() => {
    tmpStr +=
      styleStr[n] === '\n'
        ? '<br>'
        : styleStr[n] === ' '
        ? '&nbsp;'
        : styleStr[n]
    html.innerHTML = tmpStr
    style.innerHTML = styleStr.substr(0, n)
    window.scrollTo(0, 9999)
    html.scrollTo(0, 9999)
    if (n < styleStr.length - 1) {
      display()
      n++
    }
  }, delay)
}

display()
