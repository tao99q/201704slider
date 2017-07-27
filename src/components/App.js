import React, {Component} from 'react';
// http://www.baidu.com#/app
//#一般用来代表的是锚点，指向页面中的某个位置
import {
  HashRouter as Router, Route, Link
} from 'react-router-dom';
function Home(){
  return <div>Home</div>
}
let User = ()=><div>User</div>
export default class App extends Component {
  render() {
    //exact表示严格匹配，而非默认的只匹配前缀
    return (  //react元素用来指明此组件是如何渲染的 Router只能有一个子元素
      <Router>
        <div className="red">
          <ul>
            <li><a href="#/">首页</a></li>
            <li><a href="#/user">用户管理</a></li>
          </ul>
          <hr/>
          <Route exact path="/" component={Home}/>
          <Route path="/user" component={User}/>
        </div>
      </Router>
    )
  }
}