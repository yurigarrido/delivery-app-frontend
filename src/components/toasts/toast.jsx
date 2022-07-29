import React from 'react'
import { useEffect } from 'react'
import ReactDom from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeToast, toasts } from './toast.slice'

export default function Toast() {
  const dispatch = useDispatch()
  const toastList = useSelector(toasts)


  toastList.forEach((toast) => {
    console.log(toast)
    setTimeout(() => {
      dispatch(removeToast(toast.id))
    }, toast.timer)
  })

  return ReactDom.createPortal(
    <>
      <div className='toast-container' />
      <div >
        {toastList.map((toast, index) => {
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