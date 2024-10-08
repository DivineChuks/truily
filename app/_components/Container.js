import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-full max-w-6xl mx-auto'>
        {children}
    </div>
  )
}

export default Container