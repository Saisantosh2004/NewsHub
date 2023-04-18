import React, { Component } from 'react'
import loading from '../loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='container d-flex justify-content-center my-2'>
        <img  src={loading} alt='loading' />
      </div>
    )
  }
}

export default Spinner
