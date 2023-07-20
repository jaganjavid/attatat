import React from 'react'

const Loading = () => {
  
  const styles = {
    backgroundColor: "rgba(0,0,0,0.5)",
    height: 1
  }  
  return (
    <div>
        <span className="loading loading-spinner loading-lg"></span>
    </div>
  )
}

export default Loading