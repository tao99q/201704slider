import React,{Component} from 'react';
export default class SliderItems extends Component{
  render(){
    let style = {//给ul增加自定义样式对象
      width:this.props.images.length*300,//宽度是300*图片的数量
      left:this.props.index*-300+'px',//距离左边
      transitionDuration:'1s'//渐变的时间是1秒
    }
    return (
      <ul className="sliders" style={style}>
        {
          this.props.images.map((image,index)=>(
            <li className="slider" key={index}>
              <img src={image.src}/>
            </li>
          ))
        }
      </ul>
    )
  }
}