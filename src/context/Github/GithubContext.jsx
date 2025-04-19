import { createContext,useContext, useReducer} from 'react'
import githubReducer from './GithubReducers'

const GithubContext = createContext()

export const GithubProvider = ({children}) => {
    const initialState = {
       users: [],
       user: {},
       repos: [],
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

    const getRepos = async (login)=> {
        setLoading()
        const params= new URLSearchParams({
            sort: 'created',
            per_page: 10
        })
        const response = await fetch(`https://api.github.com/users/${login}/repos?${params}`,{
            headers:{
                Authorization: 'token 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'
            }
        })
        const data = await response.json()
        dispatch({
            type: "Get_Repos",
            payload: data
        })
    }
    const getUser = async (login)=> {
        setLoading()
        const response = await fetch(`https://api.github.com/users/${login}`,{
            headers:{
                Authorization: 'token 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'
            }
        })
        const data = await response.json()
        if(response.status === 401){
             window.location('/notfound')
        }else{
            dispatch({
                type: "Get_User",
                payload: data
            })
        }
       
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
            user: state.user,
            repos: state.repos,
            getRepos,
            getUser,
            searchUsers,
            clearUsers
        }}>
            {children}
        </GithubContext.Provider>
    )
}
export default GithubContext;