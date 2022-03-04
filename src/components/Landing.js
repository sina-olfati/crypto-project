import React, {useState, useEffect} from 'react'

// API
import { getCoin } from '../services/api'

// components
import Loader from './Loader'
import Coin from './Coin'

// css
import styles from "./Landing.module.css"

const Landing = () => {

    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin()
            console.log(data);
            setCoins(data)
        }

        fetchAPI()
    }, [])



    const searchHandler = event => {
      setSearch(event.target.value)
    }

    // if you didnt search anything, it will show all the coins because all the names has an empty string: ""
    const searchedCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))



  return (
    <>
        <input className={styles.input} type="text" placeholder="Search" value={search} onChange={searchHandler} />
        {
          coins.length ?
            <div className={styles.coinContainer}>
                {
                    searchedCoins.map(item =>  <Coin key={item.id} coin={item} />)
                }
            </div> : 
            <Loader />
        }

    </>
  )
}

export default Landing