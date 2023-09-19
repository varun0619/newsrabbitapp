import React from 'react'
import loading from './loading.gif.gif'

const Spinner = () => {
  return (
    <div className='text-center' >
      <img className='my-3' style={{ height: '10rem' }} src={loading} alt="loadings" />
    </div>
  )
}


export default Spinner
