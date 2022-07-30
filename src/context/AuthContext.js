import react, { createContext, useState} from 'react';

export const AuthContext = createContext()

function AuthProvider({children}) {
  const [auth, setAuth] = useState(false)
  const [user, setUser] = useState(false)




  return (
    <AuthContext.Provider value={{auth, setAuth, user, setUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;