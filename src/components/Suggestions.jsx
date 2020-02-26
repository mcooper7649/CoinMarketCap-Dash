import React from 'react'

const Suggestions = (props) => {
  const options = props.results.map(r => (
    <li key={r.id}>
      {r.name}
    </li>
  ))
  return <ul>{options}</ul>
}


// const Suggestions = (props) =>{
//     setState = {
//         linkListingData: props.filteredResults
//     }
// }


export default Suggestions