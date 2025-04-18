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
        default: return state
      }
}
export default githubReducer;