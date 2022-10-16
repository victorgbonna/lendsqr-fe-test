
export const INITIAL_STATE = {
    filteredUsers:[],
    users:[],
    currentPageIndex: 1,
    skip:0,
    take: 10,
    total:1,
    filter:{
        org:"",
        username:"",
        email:"",
        date:"",
        phone:"",
        status:""
    }
  };
  
  export const paginatorReducer = (state, action) => {
    switch (action.type) {
      case "USERS_FETCHED":
        console.log('user fetched')
        return {
          ...state,
          total:action.payload.length,
          filteredUsers:action.payload,
          users:action.payload
        };
      case "QUERY_CHANGED":
        console.log('query changed',action.payload)
        return {
          ...state,
          [action.payload.queryName]: action.payload.queryValue,
        };
      case "FILTER_APPLIED":
        console.log(action.payload,'filyer applied')
        let usersCopy=state.users
        for (const key in action.payload) {
            const element = action.payload[key];
            usersCopy=usersCopy.filter(user=>user[key]==element)
        }
        return {
            filteredUsers:usersCopy,
            skip:0,
            currentPageIndex:1
        };
      case "RESET":
        return {
          ...INITIAL_STATE,
          filteredUsers:state.users
        };
      default:
        return state;
    }
  };