import React from 'react'

// css
import styles from "./Coin.module.css"

const Coin = ({coin}) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={coin.image} alt={coin.name} />
      <span className={styles.name}>{coin.name}</span>
      <span className={styles.symbol}>{coin.symbol.toUpperCase()}</span>
      <span className={styles.currentPrice}>$ {coin.current_price.toLocaleString()}</span>
      <span className={coin.price_change_percentage_24h > 0 ? styles.greenPriceChange : styles.redPriceChange }>{coin.price_change_percentage_24h.toFixed(2)}%</span>
      <span className={styles.marketCap}>$ {coin.market_cap.toLocaleString()}</span>
    </div>
  )
}

export default Coin
