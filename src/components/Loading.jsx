import React from 'react'
import LoadingImg from "./cat-loading.gif"

const Loading = () => {
  return (
    <div style={{
        position: 'absolute',
        top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    }}>
        <img src={LoadingImg} style={{
            height: '100vh',
            width: '100%'
        }}/>
    </div>
  )
}

export default Loading