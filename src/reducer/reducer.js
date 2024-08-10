export const reducer = (preState, action = {}) =>{
  switch(action.type) {
    case "Counter/increment":{
      return {...preState, count: preState.count + action.payload}
    }
  }
}