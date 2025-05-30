import {createContext,useReducer} from 'react'
import alertReducer from './AlertReducer'

const AlertContext = createContext()

export const AlertProvider = ({children}) => {
    const initialState = null

    const [state,dispatch] = useReducer(alertReducer,initialState)

    const setAlert = (msg,type) => {
         dispatch({
            type: "Set_Alert",
            payload: {msg,type}
         })

         setTimeout(() => dispatch({
            type: "Remove_Alert"
         }),3000)
    }
      return (
        <AlertContext.Provider value={{
            alert: state,
            setAlert
        }}>
            {children}
        </AlertContext.Provider>
      )
}
export default AlertContext;