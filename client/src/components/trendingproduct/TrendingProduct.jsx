import React from 'react';
import './trendingproduct.scss'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const TrendingProduct = () => {
  return (
    <div className="TrendingProduct">
        <div className="instock">20 in Stock</div>
        <div className="productimage">
            <div className="imageWrapper">
                <img className='rawImage' src="https://ae04.alicdn.com/kf/Sb416db760e704628b05ad0d26ddf5b99c.jpg_480x480.jpg_.webp" alt="" />
            </div>
        </div>
        <div className="productDetails">
            <div className="upper">
                <div className="title">Home appliances</div>
                <div className="productname">Sony Sream Iron, Cordless...</div>
            </div>
            <div className="lower">
                <div className="addtocart">
                    Add to cart
                </div>
                <div className="price">
                    <span>MWK</span>45,000
                </div>
            </div>
            <div className="last">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>
            
        </div>
    </div>
  )
}
