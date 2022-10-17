
export const INITIAL_STATE = {
    filteredUsers:[],
    users:[],
    skip:0,
    take: 10,
    total:1,
    initialTotal:1,
    filter:{
        org:"",
        userName:"",
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
          initialTotal:action.payload.length,
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
        console.log(action.payload,'filter applied')
        let usersCopy=state.users
        let ex_filter= state.filter
        let new_filter= action.payload
        console.log({state})
        for (const key in action.payload) {
            const element = action.payload[key];
            console.log({element})
            usersCopy=usersCopy.filter(user=>user[key]===element)
        }
        return {
            ...state,
            total:usersCopy.length,
            filteredUsers:usersCopy,
            filter:{...ex_filter, ...new_filter},
            skip:0
        };
      case "RESET":
        return {
          ...INITIAL_STATE,
          total:state.initialTotal,
          filteredUsers:state.users
        };
      default:
        return state;
    }
  };