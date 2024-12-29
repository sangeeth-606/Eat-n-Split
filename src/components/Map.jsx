// import React from 'react'
// import {  useSearchParams } from 'react-router-dom'
import styles from './Map.module.css'
import { useNavigate } from 'react-router-dom'
function Map() {
const navigate=useNavigate()
  // const [SearchParams,setsearchparams]= useSearchParams()
  // const lat=SearchParams.get('lat')
  // const lng=SearchParams.get('lng')
  return (
    <div className={styles.mapContainer}
      onClick={()=>
        navigate("form")
      }
      >
      {/* <h1>{lat}</h1> */}
      {/* <h3>{lng}</h3> */}
    </div>
  )
}

export default Map