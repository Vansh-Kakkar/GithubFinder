import { createContext,useContext, useReducer } from 'react'
import githubReducer from './GithubReducers'

const GithubContext = createContext()

export const GithubProvider = ({children}) => {
    const initialState = {
       users: [],
       loading: false
    }
    const [state,dispatch] = useReducer(githubReducer,initialState)

    const searchUsers = async (text)=> {
        setLoading()
        const params= new URLSearchParams({
            q: text
        })
        const response = await fetch(`https://api.github.com/search/users?${params}`,{
            headers:{
                Authorization: 'token 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'
            }
        })
        const {items} = await response.json()
        dispatch({
            type: "Get_Users",
            payload: items
        })
    }
    const clearUsers = () => {
        dispatch({
            type: "Clear_Users"
        })
    }
    const setLoading = () => dispatch({
        type:  "Set_Loading"
    })
    return(
        <GithubContext.Provider value={{
            users: state.users,
            loading: state.loading,
            searchUsers,
            clearUsers
        }}>
            {children}
        </GithubContext.Provider>
    )
}
export default GithubContext;