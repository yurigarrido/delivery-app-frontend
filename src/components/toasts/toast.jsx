import React from 'react'
import { useContext } from 'react'
import ReactDom from 'react-dom'
import { LayoutContext } from '../../context/LayoutContext'

export default function Toast() {
  const { toasts } = useContext(LayoutContext)


  toasts.forEach((toast) => {
    console.log(toast)
    setTimeout(() => {
      dispatch(removeToast(toast.id))
    }, toast.timer)
  })

  return ReactDom.createPortal(
    <>
      <div className='toast-container' />
      <div >
        {toasts.map((toast, index) => {
          return (
            <div key={index} className={`toast ${toast.type}`}>
              <div>
                <span>{toast.content}</span>
                <button onClick={() => dispatch(removeToast(toast.id))}>x</button>
              </div>
            </div>
          )
        })}
      </div>
    </>,
    document.getElementById('toasts')
  )
}