import React, { useEffect } from 'react';
import './categorycard.scss'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircle, faSquare } from '@fortawesome/free-regular-svg-icons';
import { TrendingProduct } from '../trendingproduct/TrendingProduct';

export const CategoryCard = () => {
    // const inputBody = {
    //         "reference": "Testing transaction",
    //         "subscriber": {
    //         "country": "UG",
    //         "currency": "UGX",
    //         "msisdn": 999989584
    //         },
    //         "transaction": {
    //         "amount": 1000,
    //         "country": "UG",
    //         "currency": "UGX",
    //         "id": "random-unique-id"
    //         }
    //     }

    //     const headers = {
    //         'Content-Type':'application/json',
    //         'Accept':'*/*',
    //         'X-Country':'UG',
    //         'X-Currency':'UGX',
    //         'Authorization': 'Bearer  UCLcp1oeq44KPXr8X*******xCzki2w'
    //       };

    //     useEffect(()=>{
    //         const AirtelAPI = async () => {
    //             const res = await axios.post("https://openapiuat.airtel.africa/airtelapi/merchant/v1/payments/", inputBody, {headers})
    //             console.log(res)
    //         }
    //         AirtelAPI()
    //     },[])
    const coverimage = {
        backgroundImage: `url(https://amazcart.ischooll.com/public/uploads/images/21-02-2023/63f48b22a58d8.jpeg)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }


  return (
    <div className="categorycard">
        <div className="left">
                <div className="sections">
                        <div className="title">Categories</div>
                        <div className="listitems">
                            <div className="list">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                </div>
                                <div className="catName">
                                    Living room sofas Living room sofas Living room sofas
                                </div>

                            </div>
                            <div className="list">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faCircle} />
                                </div>
                                <div className="catName">
                                    Living room sofas
                                </div>

                            </div>
                            <div className="list">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faCircle} />
                                </div>
                                <div className="catName">
                                    Living room sofas
                                </div>

                            </div>
                            <div className="list">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faCircle} />
                                </div>
                                <div className="catName">
                                    Living room sofas
                                </div>

                            </div>
                        </div>
                </div>
                <div className="divider"></div>
                <div className="sections">
                        <div className="title">Brands</div>
                        <div className="listitems">
                            <div className="list">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faSquareCheck} />
                                </div>
                                <div className="catName">
                                    Nike Shoes
                                </div>

                            </div>
                            <div className="list">
                                <div className="icon">
                                <FontAwesomeIcon icon={faSquare} />
                                </div>
                                <div className="catName">
                                    Telefuncken
                                </div>

                            </div>
                            <div className="list">
                                <div className="icon">
                                <FontAwesomeIcon icon={faSquare} />
                                </div>
                                <div className="catName">
                                    Finder
                                </div>

                            </div>
                            <div className="list">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faSquare} />
                                </div>
                                <div className="catName">
                                    Exolento
                                </div>

                            </div>
                        </div>
                </div>
                <div className="divider"></div>
                <div className="sections">
                        <div className="title">Material</div>
                        <div className="listitems">
                            <div className="list">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faSquareCheck} />
                                </div>
                                <div className="catName">
                                    Rubber buillet proof
                                </div>

                            </div>
                            <div className="list">
                                <div className="icon">
                                <FontAwesomeIcon icon={faSquare} />
                                </div>
                                <div className="catName">
                                    Silk
                                </div>

                            </div>
                            <div className="list">
                                <div className="icon">
                                <FontAwesomeIcon icon={faSquare} />
                                </div>
                                <div className="catName">
                                    Waxy
                                </div>

                            </div>
                            <div className="list">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faSquare} />
                                </div>
                                <div className="catName">
                                    Feather drogon field
                                </div>

                            </div>
                        </div>
                </div>
                <div className="divider"></div>
                <div className="sections">
                    <div className="title">Price range</div>
                    <div className="sectioninput">
                        <input type="text" placeholder='MWK'/>
                        <input type="text" placeholder='MWK' />
                        <span className="button">Ok</span>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="sections">
                        <div className="title">Appearance</div>
                        <div className="listitems">
                            <div className="list">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faSquareCheck} />
                                </div>
                                <div className="catName">
                                    Rubber buillet proof
                                </div>

                            </div>
                            <div className="list">
                                <div className="icon">
                                <FontAwesomeIcon icon={faSquare} />
                                </div>
                                <div className="catName">
                                    Silk
                                </div>

                            </div>
                            <div className="list">
                                <div className="icon">
                                <FontAwesomeIcon icon={faSquare} />
                                </div>
                                <div className="catName">
                                    Waxy
                                </div>

                            </div>
                            <div className="list">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faSquare} />
                                </div>
                                <div className="catName">
                                    Feather drogon field
                                </div>

                            </div>
                        </div>
                </div>
                <div className="sections">
                        <div className="title">Style</div>
                        <div className="listitems">
                            <div className="list">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faSquareCheck} />
                                </div>
                                <div className="catName">
                                    Rubber buillet proof
                                </div>

                            </div>
                            <div className="list">
                                <div className="icon">
                                <FontAwesomeIcon icon={faSquare} />
                                </div>
                                <div className="catName">
                                    Silk
                                </div>

                            </div>
                            <div className="list">
                                <div className="icon">
                                <FontAwesomeIcon icon={faSquare} />
                                </div>
                                <div className="catName">
                                    Waxy
                                </div>

                            </div>
                            <div className="list">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faSquare} />
                                </div>
                                <div className="catName">
                                    Feather drogon field
                                </div>

                            </div>
                        </div>
                </div>
        </div>
        <div className="middle">
                <TrendingProduct/>
                <TrendingProduct/>
                <TrendingProduct/>
                <TrendingProduct/>
                <TrendingProduct/>
                <TrendingProduct/>
                <TrendingProduct/>
                <TrendingProduct/>
                <TrendingProduct/>
                <TrendingProduct/>
        </div>
        <div className="right" style={coverimage}>

        </div>
    </div>
  )
}
