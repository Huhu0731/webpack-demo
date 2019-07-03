import foo from './foo'
import './styles/index.css'
import "@babel/polyfill";

foo()
const a = 123
// console.log(a)

const arr = ['吃饭', '睡觉']
arr.forEach(item => {
    console.log(item)
})

const list = ['a','b']
console.log(list.includes('a'))