import react, { createContext, useState} from 'react';

export const LayoutContext = createContext()

function LayoutPrvoder({children}) {
  const [toasts, setToasts] = useState([])

  const createToast = (payload) => {
    setToasts([...toasts, {id: Math.random(), ...payload}])
  }

  const removeToast = (id) => {
    const cleanList = toasts.filter(toast => toast.id !== id);
    setToasts(cleanList)
  }




  return (
    <LayoutContext.Provider value={{createToast, removeToast, toasts}}>
      {children}
    </LayoutContext.Provider>
  )
}

export default LayoutPrvoder;