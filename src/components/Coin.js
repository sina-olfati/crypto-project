import React from 'react'

const Coin = ({coin}) => {
  return (
    <div style={{borderBottom: "1px silver solid", padding: 10, display: "flex", justifyContent: "space-around", alignItems: "center"}}>
      <img src={coin.image} style={{height: 40}} alt={coin.name} />
      <div style={{border: "dashed white", width: "80%", padding: "0 30px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <span>{coin.name}</span>
        <span>{coin.symbol.toUpperCase()}</span>
        <span>{coin.current_price.toLocaleString()}</span>
        <span>{coin.price_change_percentage_24h}</span>
        <span>{coin.market_cap.toLocaleString()}</span>
      </div>
    </div>
  )
}

export default Coin
