import { useState, useEffect } from 'react'
import { BrowserHistory } from 'history'
import { useParams } from 'react-router-dom'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import RestaurantCardList from 'RestaurantCardList'

const RestaurantList: React.FC<{ history: BrowserHistory }> = (props) => {
  const { station } = useParams()
  const [stationRestaurants, setStationRestaurants] = useState([])
  //ここ両方のloadとerrorを一つで管理してしまっている。
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  useEffect(() => {
    console.log(station)
    const host = 'http://127.0.0.1:5000'
    fetch(`${host}/restaurant/:station/${station}`)
      .then((result) => result.json())
      .then((restaurants) => {
        console.log(restaurants)
        setStationRestaurants(restaurants.data)
        setLoading(false)
      })
      .catch(() => {
        setLoading(true)
        setError(true)
      })
    // return () => {};
  }, [])

  if (loading) {
    return <div>loading</div>
  }

  if (error) {
    return <div>error</div>
  }
  return (
    <>
      <h2>{station}</h2>
      <RestaurantCardList restaurants={stationRestaurants} />
    </>
  )
}

export default RestaurantList
