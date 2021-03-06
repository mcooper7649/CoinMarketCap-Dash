import React, { Component } from 'react';
import axios from 'axios';
// import Suggestions from './Suggestions'
// import CoinDetails from './CoinDetails'
// import { Link, Route } from 'react-router-dom'



class SearchBar extends Component {
    state = {
      query: '',
      results: [],
      filteredResults: [],
      test: []
    }
    
    getSearchInfo = () => {
        axios.get('https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + process.env.REACT_APP_CMC_API_KEY)
        .then(response => {
          console.log(response.data.data)
          
        //   const btc = response.data.data.find( ({ name }) => name === 'Bitcoin' );
          // let eth = response.data.data[1]
          // let link = response.data.data[12]
        //   const eth = response.data.data.find( ({ name }) => name === 'Ethereum' );
        //   const link = response.data.data.find( ({ name }) => name === 'Chainlink' );
        //   const [...newquery] = response.data.data.find( ({ name }) => name === this.state.query );
          // console.log(link)
          
      
          this.setState({
              results: response.data.data,
              filteredResults: response.data.data
            // btcListingData: btc,
            // btcListingUSD: btc.quote.USD,
            // btcListingUSDPrice: btc.quote.USD.price.toFixed(2),
            // btcListingUSDPrice24h: btc.quote.USD.percent_change_24h.toFixed(2),
      
            // ethListingData: eth,
            // ethListingUSD: eth.quote.USD,
            // ethListingUSDPrice: eth.quote.USD.price.toFixed(2),
            // ethListingUSDPrice24h: eth.quote.USD.percent_change_24h.toFixed(2),
      
            // linkListingData: link,
            // linkListingUSD: link.quote.USD,
            // linkListingUSDPrice: link.quote.USD.price.toFixed(2),
            // linkListingUSDPrice24h: link.quote.USD.percent_change_24h.toFixed(2),
            // ready: true,
            // BtcRank: response.data.status.data[0].rank,
            // btc_historical_data: response.data.data[0].first_historical_data
          })
        })
        .catch(err => console.log(err))   
      }
      

    handleInputChange = (e) => {
        // e.preventDefault()
        // console.log(e.target.value, this.state.results)
        let copyResults = [...this.state.results]
        // console.log(copyResults)
        let filterResults = copyResults.filter(eachCoin => {
            return eachCoin.name.toLowerCase().includes(e.target.value.toLowerCase()) || eachCoin.symbol.toLowerCase().includes(e.target.value.toLowerCase())
        })

        console.log(filterResults)
     if(filterResults[0]){
        this.setState({
         filteredResults: filterResults[0].name
        })
    }
    }

    componentDidMount= async () =>{
        await this.getSearchInfo()
    }

    redirectingTo = (e) => {
        e.preventDefault()
        // console.log("hi")
        this.props.history.push(`/coin-details/${this.state.filteredResults}`)
    }
   
    render() {
        console.log(this.props)
      return (
        <>
        <form action={`coin-details/${this.state.filteredResults}`}>
        {/* <form onSubmit={this.redirectingTo}> */}
          <input
            placeholder="Search for a Coin..."
            ref={input => this.search = input}
            onChange={this.handleInputChange} 
            
          />
          <button onClick={this.redirectingTo} type="submit"><i className="ti-search"></i></button>
          </form>
          {/* <Link to={`/coin-details/${this.state.filteredResults}`}>Submit</Link> */}
          
          
          
          {/* <Suggestions {...this.state} results={this.state.filteredResults} /> */}
 
        </>
      )
    }
   }
   


export default SearchBar;