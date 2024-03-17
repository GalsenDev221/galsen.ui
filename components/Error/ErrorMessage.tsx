import React from 'react'

type PropsType = {
  message: string
}

const ErrorMessage = ({ message }: PropsType) => {
  return (
    // TODO: this components must be redesigned
    <div className='text-center mt-8'>{message}</div>
  )
}

export default ErrorMessage