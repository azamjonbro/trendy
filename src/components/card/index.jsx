import React from 'react'
import icon from '../../assets/tepaga.png'
import './style.scss';
function index(props) {
  return (
    <div className="props-card" key={props.img}>
        <div className="props-card-imgbox">
            <img src={props.img} alt={props.title} />

        </div>
        <div className="props-card-titlebox">
            <h4>
                {props.title}
            </h4>
            <div className="tepaga_icon"><img src={icon} alt={props.title} /></div>
        </div>
    </div>
  )
}

export default index
