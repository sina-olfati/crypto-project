import React, {useState, useEffect} from 'react'

// API
import { getCoin } from '../services/api'

// components
import Loader from './Loader'


const Landing = () => {

    const [coins, setCoins] = useState([])


    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin()
            console.log(data);
            setCoins(data)
        }
        fetchAPI()
    }, [])




  return (
    <>
        <input type="text" placeholder="Search" />
        {
          coins.length ?
            <div>
                {
                    coins.map(item => <p key={item.id}><img src={item.image} />{item.id} / {item.symbol} / {item.current_price}</p>)
                }
            </div> : 
            <Loader />
        }

    </>
  )
}

export default Landing
