import React from 'react';
import './viewproductcard.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const ViewProductCard = () => {
  return (
    <div className="viewproductcard">
        <div className="history">Electronics - Home - Irons</div>
        <div className="maincard">
            <div className="left">
                <div className="thumbnails">
                    <div className="thumbcover">
                        <img src="https://m.media-amazon.com/images/I/61Uv-zYb8VL._SX522_.jpg" alt="" className="thumb" />
                    </div>
                    <div className="thumbcover">
                        <img src="https://m.media-amazon.com/images/I/91DorKG-oYL._SX522_.jpg" alt="" className="thumb" />
                    </div>
                    <div className="thumbcover">
                        <img src="https://m.media-amazon.com/images/I/71FGI4TiJEL._SX425_.jpg" alt="" className="thumb" />
                    </div>
                    <div className="thumbcover">
                        <img src="https://m.media-amazon.com/images/I/61Uv-zYb8VL._SX522_.jpg" alt="" className="thumb" />
                    </div>
                    <div className="thumbcover">
                        <img src="https://m.media-amazon.com/images/I/61Uv-zYb8VL._SX522_.jpg" alt="" className="thumb" />
                    </div>
                    
                </div>
                <div className="actualimage">
                    <img src="https://m.media-amazon.com/images/I/71FGI4TiJEL._SX425_.jpg" alt="" className="activeimage" />
                </div>
            </div>
            <div className="middle">
                <div className="title">
                    Southwire MH8110 Wire Smart Cable Dispenser; Floor or Stud Mounted
                </div>
                <div className="instock">24 items in stock</div>
                <div className="rating">
                    <div className="value">4.9</div>
                    <div className="stars">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="seperater">
                        |
                    </div>
                    <div className="ratersamount">
                        2,100
                    </div>
                </div>
                <div className="divider"></div>
                <div className="details">
                    Details
                </div>
                <div className="price">
                    <div className="upper">
                        <span className="discount">
                            <span className="percent">10%</span>
                            <span className="disco">Discount</span>
                        </span>
                        <span className="price1">
                            <span className="mwk">
                                MWK
                            </span>
                            <span className="actualprice">
                                50,000
                            </span>
                        </span>
                    </div>
                    <div className="lower">
                        <span className="typical">
                            Typical Price: 
                        </span>
                        <span className="oldprice">
                            MWK 75,000
                        </span>
                    </div>
                </div>
                <div className="description">
                    <p>Available at a lower price from other sellers that may not offer free Prime shipping.</p>
                    <p>- Includes 2-brackets to mount to floor or stud.</p>
                    <p>- Versatility of 3 items in 1</p>
                    <p>- Square-tube steel with a premium powder coat finish</p>
                    <p>- Convenient carry handle now included.</p>
                    <p>- Max weight: 50 lbs With arms; 100 lbs With REELMadison Electric is now part of the Southwire family Product packaging may vary.</p>
                </div>
            </div>
            <div className="right">
                <div className="price">
                    <span className="mwk">
                        MWK
                    </span>
                    <div className="actualprice">
                        50,000
                    </div>
                </div>
                <div className="essay">
                    Enjoy a consistent 10% discount on your purchases through JiaBaiLi Online.
                </div>
                <div className="instockright">
                    In Stock
                </div>
                <div className="quantity">
                    <span className="title">Quantity</span>
                    <div className="buttons">
                        <span className="minus">-</span>
                        <span className="amount">2</span>
                        <span className="plus">+</span>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="addtocart">
                    <button>
                        Add to cart
                    </button>
                    <button className='buynow'>
                        Buy now
                    </button>
                </div>
                <div className="delivary">
                    <div className="left-d">
                        <span>Sold by</span>
                        <span>Delivary {"(LL)"}</span>
                        <span>Delivary by </span>
                    </div>
                    <div className="right-d">
                        <span>JiaBaiLishop.com</span>
                        <span>JiaBaiLishop.com</span>
                        <span className='speed'>Speed Courier services</span>
                    </div>
                </div>
                <div className="dividerr"></div>
            </div>
        </div>
    </div>
  )
}
