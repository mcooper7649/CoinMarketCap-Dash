import React from 'react';
import {Link} from 'react-router-dom';

import VideoList from './VideoList'
import Videoreel from './Videoreel'
import VideoReelEth from './VideoReelEth'
import VideoReelLink from './VideoReelLink'

import Btcinfo from './Btcinfo'
import SearchBar from './SearchBar';





function Coininfo(props) {
    console.log(props)
    return (
        

        <div className="main-content-inner">
                {/* <!-- sales report area start --> */}
                <div className="sales-report-area mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="single-report mb-xs-30">
                                <div className="s-report-inner pr--20 pt--30 mb-3">
                                    <div className="icon"><i className="fab fa-bitcoin"></i></div>       
                                    <div className="s-report-title d-flex justify-content-between">
                                        <h4 className="header-title mb-0">{props.btcListingData.name}</h4>
                                        <p>24 H</p>
                                    </div>
                                    <div className="d-flex justify-content-between pb-2">
                                        <h2>${props.btcListingUSDPrice}</h2>
                                        <span>{props.btcListingUSDPrice24h}%</span>
                                        
                                    </div>
                                </div>
                                
                                
                                {/* <canvas id="coin_sales1" height="100">{props.links}</canvas> */}
                                {/* <div id="video-list">
                                <Videoreel id="video-list"{...props}
                                links={props.links}
                                btclinks={props.btclinks}
                                ethlinks={props.ethlinks}
                                linklinks={props.linklinks}
                                 />
                                 </div> */}
                                 <div className="button-wrap">
                                 <Link to="/more-info-btc"> <button type="button" data-toggle="modal" data-target="#exampleModalCenter"  className="btn btn-flat btn-dark btn-lg btn-block"><h1 id="btn-white">More Information</h1></button></Link>
                                            
                                 </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-report mb-xs-30">
                                <div className="s-report-inner pr--20 pt--30 mb-3">
                                    <div className="icon" id="eth-coin"><i className="fab fa-ethereum"></i></div>
                                    <div className="s-report-title d-flex justify-content-between">
                                        <h4 className="header-title mb-0">{props.ethListingData.name}</h4>
                                        <p>24 H</p>
                                    </div>
                                    <div className="d-flex justify-content-between pb-2">
                                        <h2>${props.ethListingUSDPrice}</h2>
                                        <span>{props.ethListingUSDPrice24h}%</span>
                                    </div>
                                </div>
                                {/* <canvas id="coin_sales2" height="100"></canvas> */}
                                {/* <div id="video-list">
                                <VideoReelEth id="video-list"{...props}
                                links={props.links}
                                btclinks={props.btclinks}
                                ethlinks={props.ethlinks}
                                linklinks={props.linklinks}
                                 />
                                 </div> */}
                                 <div className="button-wrap">
                                 <Link to="/more-info-eth"> <button type="button" data-toggle="modal" data-target="#exampleModalCenter"  className="btn btn-flat btn-dark btn-lg btn-block"><h1 id="btn-white">More Information</h1></button></Link>
                                            
                                 </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-report">
                                <div className="s-report-inner pr--20 pt--30 mb-3">
                                    <div className="icon"><img src="https://pbs.twimg.com/profile_images/1030475757892579334/qvSHhRyC_400x400.jpg" alt="link"></img></div>
                                    <div className="s-report-title d-flex justify-content-between">
                                      <h4 className="header-title mb-0">{props.linkListingData.name}</h4>
                                        <p>24 H</p>
                                    </div>
                                    <div className="d-flex justify-content-between pb-2">
                                        <h2>${props.linkListingUSDPrice}</h2>
                                        <span>{props.linkListingUSDPrice24h}%</span>
                                    </div>
                                </div>
                                {/* <canvas id="coin_sales3" height="100"></canvas> */}
                                {/* <div id="video-list">
                                <VideoReelLink id="video-list"{...props}
                                links={props.links}
                                btclinks={props.btclinks}
                                ethlinks={props.ethlinks}
                                linklinks={props.linklinks}
                                 />
                                 </div> */}
                                 <div className="button-wrap">
                                 <Link to="/more-info-link"> <button type="button" data-toggle="modal" data-target="#exampleModalCenter"  className="btn btn-flat btn-dark btn-lg btn-block"><h1 id="btn-white">More Information</h1></button></Link>
                                            
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- sales report area end -->
                <!-- overview area start --> */}
                <div className="row">
                    <div className="col-xl-9 col-lg-8">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center"  id="latest-vids">
                                    <h4 className="header-title mb-0">Latest Blockchain Videos</h4>
                                    <div className="search-box pull-left">
                                        {/* <form action="onSubmit">
                                            <input type="text" name="search" placeholder="Search..." required />
                                            <i className="ti-search"></i>
                                        </form> */}
                                        <SearchBar {...props}
                                        // links={props.links}
                                        />
                                    </div>
                                </div>
                                <VideoList {...props}
                                    links={props.links}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 coin-distribution">
                        <div className="card h-full">
                            <div className="card-body">
                                <h4 className="header-title mb-0">Market Info</h4>
                                <div id="coin_distribution">
                                    <ul>
                                        <li className="info-list">Total Amount of CryptoCurrecies: {props.TotalCoinData.total_cryptocurrencies}</li>
                                        <li className="info-list">Active CryptoCurrencies: {props.TotalMarketCap.active_cryptocurrencies}</li>
                                        <li className="info-list">Total Exchanges: {props.TotalCoinData.total_exchanges}</li>
                                        <li className="info-list">Bitcoin Market Dominance: {props.TotalMarketCap.btc_dominance}%</li>
                                        <li className="info-list">Ethereum Market Dominance: {props.TotalMarketCap.eth_dominance}%</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
        </div>
    );
}

export default Coininfo;