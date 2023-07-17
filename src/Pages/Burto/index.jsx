import React from 'react'
import './style.scss'
import updoticon from '../../assets/updoticon.png'
function index() {
  return (
    <div className='bruto'>
      <div className="container bruto-cont">
            <div className="bruto-top">
              <h2>Providing intermediary services freelanc</h2>
            </div>
            <ul className="bruto-imagebar">
                <li className="bruto-imagebar-item_left">
                    <div className="bruto-imagebar-iconbox">
                      <img src={updoticon} alt="" />
                    </div>
                    <img src="https://picsum.photos/id/381/320/290" alt="" className="bruto-imagebar-item_left-img"/> 
                    <p className='bruto-imagebar-text'>Providing intermediary services and talented freelancers</p>
                </li>
                <li className="bruto-imagebar-item_right">
                  <img src="https://picsum.photos/id/20/320/290" alt="image" className='bruto-imagebar-item_right-img' />
                  <img src="https://picsum.photos/id/23/320/290" alt="" className="bruto-imagebar-item_right-img2" />
                  <span>
                    <p className="bruto-imagebar-item_right-text">
                  Providing intermediary services and talented freelancers
                  </p>
                  <img src="https://picsum.photos/id/22/320/290" alt="" className="bruto-imagebar-item_right-img3" />
                  </span>
                </li>
            </ul>
      </div>
    </div>
  )
}

export default index
