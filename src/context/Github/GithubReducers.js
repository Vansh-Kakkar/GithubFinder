const githubReducer = (state,action) => {
      switch(action.type){
        case "Get_Users": return{
            ...state,
            users:action.payload,
            loading: false
        }
        case "Set_Loading": return{
            ...state,
            loading:true
        }
        case "Clear_Users": return{
            ...state,
            users: []
        }
        case "Get_User": return{
            ...state,
            user: action.payload,
            loading: false
        }
        case "Get_Repos": return{
            ...state,
            repos: action.payload,
            loading: false
        }
        default: return state
      }
}
export default githubReducer;