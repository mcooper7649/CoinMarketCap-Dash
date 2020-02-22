import React, { Component } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import Coininfo from './components/Coininfo'
import Btcinfo from './components/Btcinfo'
import Ethinfo from './components/Ethinfo'
import Linkinfo from './components/Linkinfo'


var api_key = {
  key: "ca1a9c15-b98e-41dd-a03d-45b279920f4d",
  // youtube: "AIzaSyBFh1Qe1Yc0dkpce-A_ZBWvbPa_z6-VpIA",
  // youtube: "AIzaSyA5WEFxIq4Y5pbiifVB3VQVIlAptmMfgTw"
  // youtube: "AIzaSyDIMSwQ_L5FJFqk9RrMZpxvwAdMzaUxqKA"
  youtube: "AIzaSyDfAZ83X5Ro-JyiQlO7i8lFUVf1kuSAzsg"
}



class App extends Component {
  state = {
    TotalCoinData: [],
    TotalMarketCap: [],
    ready: false,
    TotalCryptoCurrencies: [],
    last_updated: [],

    TotalBtcData: [],
    BtcRank: [],
    btc_historical_data: [],
    btcListingData: [],
    btcListingUSD: [],
    btcListingUSDPrice24h: [],

    ethListingData: [],
    ethListingUSD: [],
    ethListingUSDPrice: [],
    ethListingUSDPrice24h: [],

    linkListingData: [],
    linkListingUSD: [],
    linkListingUSDPrice: [],
    linkListingUSDPrice24h: [],

    links: [],
    btclinks: [],
    ethlinks: [],
    linklinks: []

  }

  

  getBtcInfo = () => {
    axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + api_key.key)
    .then(response => {
      console.log(response.data.data)
      this.setState({
        TotalBtcData: response.data.data,
        ready: true,
        // BtcRank: response.data.status.data[0].rank,
        // btc_historical_data: response.data.data[0].first_historical_data
      })
    })
    .catch(err => console.log(err))   
}


getBtcListingInfo = () => {
  axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=' + api_key.key)
  .then(response => {
    // console.log(response.data.data)
    
    let btc = response.data.data[0]
    let eth = response.data.data[1]
    let link = response.data.data[13]

    this.setState({
      btcListingData: btc,
      btcListingUSD: btc.quote.USD,
      btcListingUSDPrice: btc.quote.USD.price.toFixed(2),
      btcListingUSDPrice24h: btc.quote.USD.percent_change_24h.toFixed(2),

      ethListingData: eth,
      ethListingUSD: eth.quote.USD,
      ethListingUSDPrice: eth.quote.USD.price.toFixed(2),
      ethListingUSDPrice24h: eth.quote.USD.percent_change_24h.toFixed(2),

      linkListingData: link,
      linkListingUSD: link.quote.USD,
      linkListingUSDPrice: link.quote.USD.price.toFixed(2),
      linkListingUSDPrice24h: link.quote.USD.percent_change_24h.toFixed(2),
      ready: true,
      // BtcRank: response.data.status.data[0].rank,
      // btc_historical_data: response.data.data[0].first_historical_data
    })
  })
  .catch(err => console.log(err))   
}



  getMarketInfo = () => {
    axios.get('https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=' + api_key.key)
    .then(response => {
      // console.log(response.data)
      this.setState({
        TotalCoinData: response.data.data,
        TotalMarketCap: response.data.data.quote.USD.total_market_cap,
        TotalCryptoCurrencies: response.data.data.total_cryptocurrencies,
        last_updated: response.data.data.last_updated,
        ready: true,
      })
    })
    .catch(err => console.log(err))   
}

getYoutubeInfo = () => {
  axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=relevance&q=blockchain&type=video&videoEmbeddable=true&key=` + api_key.youtube)
  .then(response => {
    // console.log(response.data.items)
    this.setState({
      links: response.data.items,
      ready: true,
    })
  })
  .catch(err => console.log(err))   
}

getYoutubeBtc = () => {
  axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=relevance&q=bitcoin&type=video&videoEmbeddable=true&key=` + api_key.youtube)
  .then(response => {
    // console.log(response.data.items)
    this.setState({
      btclinks: response.data.items,
      ready: true,
    })
  })
  .catch(err => console.log(err))   
}

getYoutubeEth = () => {
  axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=relevance&q=ethereum&type=video&videoEmbeddable=true&key=` + api_key.youtube)
  .then(response => {
    // console.log(response.data.items)
    this.setState({
     ethlinks: response.data.items,
      ready: true,
    })
  })
  .catch(err => console.log(err))   
}

getYoutubeLink = () => {
  axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=relevance&q=chainlink&type=video&videoEmbeddable=true&key=` + api_key.youtube)
  .then(response => {
    // console.log(response.data.items)
    this.setState({
      linklinks: response.data.items,
      ready: true,
    })
  })
  .catch(err => console.log(err))   
}




componentDidMount = () => {
  this.getMarketInfo()
  this.getBtcInfo()
  this.getBtcListingInfo()
  this.getYoutubeInfo()
  this.getYoutubeBtc()
  this.getYoutubeEth()
  this.getYoutubeLink()
  
  

}


      

  render() {
    
    return (

      <div>
       

      
      <Switch>

        <Route exact path="/" render={props => 
              <Coininfo {...this.props} 
              btcListingData={this.state.btcListingData}
              btcListingUSD={this.state.btcListingUSD}
              btcListingUSDPrice={this.state.btcListingUSDPrice}
              btcListingUSDPrice24h={this.state.btcListingUSDPrice24h}
              ethListingData={this.state.ethListingData}
              ethListingUSD={this.state.ethListingUSD}
              ethListingUSDPrice={this.state.ethListingUSDPrice}
              ethListingUSDPrice24h={this.state.ethListingUSDPrice24h}
              linkListingData={this.state.linkListingData}
              linkListingUSD={this.state.linkListingUSD}
              linkListingUSDPrice={this.state.linkListingUSDPrice}
              linkListingUSDPrice24h={this.state.linkListingUSDPrice24h}
              TotalCoinData={this.state.TotalCoinData}
              TotalMarketCap={this.state.TotalCoinData}
              TotalCryptoCurrencies={this.state.TotalCryptoCurrencies}
              last_updated={this.state.last_updated}
              TotalBtcData={this.state.TotalBtcData}
              btc_historical_data={this.state.btc_historical_data}
              links={this.state.links}
              btclinks={this.state.btclinks}
              ethlinks={this.state.ethlinks}
              linklinks={this.state.linklinks}
              />}
            />

<Route path="/more-info-btc" render={props => 
              <Btcinfo {...this.props} 
              btcListingData={this.state.btcListingData}
              btcListingUSD={this.state.btcListingUSD}
              btcListingUSDPrice={this.state.btcListingUSDPrice}
              btcListingUSDPrice24h={this.state.btcListingUSDPrice24h}
              ethListingData={this.state.ethListingData}
              ethListingUSD={this.state.ethListingUSD}
              ethListingUSDPrice={this.state.ethListingUSDPrice}
              ethListingUSDPrice24h={this.state.ethListingUSDPrice24h}
              linkListingData={this.state.linkListingData}
              linkListingUSD={this.state.linkListingUSD}
              linkListingUSDPrice={this.state.linkListingUSDPrice}
              linkListingUSDPrice24h={this.state.linkListingUSDPrice24h}
              TotalCoinData={this.state.TotalCoinData}
              TotalMarketCap={this.state.TotalCoinData}
              TotalCryptoCurrencies={this.state.TotalCryptoCurrencies}
              last_updated={this.state.last_updated}
              TotalBtcData={this.state.TotalBtcData}
              btc_historical_data={this.state.btc_historical_data}
              links={this.state.btclinks}
              btclinks={this.state.btclinks}
              ethlinks={this.state.ethlinks}
              linklinks={this.state.linklinks}
              />}
            />

<Route path="/more-info-eth" render={props => 
              <Ethinfo {...this.props} 
              btcListingData={this.state.btcListingData}
              btcListingUSD={this.state.btcListingUSD}
              btcListingUSDPrice={this.state.btcListingUSDPrice}
              btcListingUSDPrice24h={this.state.btcListingUSDPrice24h}
              ethListingData={this.state.ethListingData}
              ethListingUSD={this.state.ethListingUSD}
              ethListingUSDPrice={this.state.ethListingUSDPrice}
              ethListingUSDPrice24h={this.state.ethListingUSDPrice24h}
              linkListingData={this.state.linkListingData}
              linkListingUSD={this.state.linkListingUSD}
              linkListingUSDPrice={this.state.linkListingUSDPrice}
              linkListingUSDPrice24h={this.state.linkListingUSDPrice24h}
              TotalCoinData={this.state.TotalCoinData}
              TotalMarketCap={this.state.TotalCoinData}
              TotalCryptoCurrencies={this.state.TotalCryptoCurrencies}
              last_updated={this.state.last_updated}
              TotalBtcData={this.state.TotalBtcData}
              btc_historical_data={this.state.btc_historical_data}
              links={this.state.ethlinks}
              btclinks={this.state.btclinks}
              ethlinks={this.state.ethlinks}
              linklinks={this.state.linklinks}
              />}
            />

<Route path="/more-info-link" render={props => 
              <Linkinfo {...this.props} 
              btcListingData={this.state.btcListingData}
              btcListingUSD={this.state.btcListingUSD}
              btcListingUSDPrice={this.state.btcListingUSDPrice}
              btcListingUSDPrice24h={this.state.btcListingUSDPrice24h}
              ethListingData={this.state.ethListingData}
              ethListingUSD={this.state.ethListingUSD}
              ethListingUSDPrice={this.state.ethListingUSDPrice}
              ethListingUSDPrice24h={this.state.ethListingUSDPrice24h}
              linkListingData={this.state.linkListingData}
              linkListingUSD={this.state.linkListingUSD}
              linkListingUSDPrice={this.state.linkListingUSDPrice}
              linkListingUSDPrice24h={this.state.linkListingUSDPrice24h}
              TotalCoinData={this.state.TotalCoinData}
              TotalMarketCap={this.state.TotalCoinData}
              TotalCryptoCurrencies={this.state.TotalCryptoCurrencies}
              last_updated={this.state.last_updated}
              TotalBtcData={this.state.TotalBtcData}
              btc_historical_data={this.state.btc_historical_data}
              links={this.state.linklinks}
              btclinks={this.state.btclinks}
              ethlinks={this.state.ethlinks}
              linklinks={this.state.linklinks}
              />}
            />
                
        </Switch>

      </div>
    );
  }
}

export default App;