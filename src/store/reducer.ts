const initState = {
    account: "",
    password: "",
  };

const reducer = (state = initState, action:any) => {
    switch(action.type){
        case "CLEAR":
            return initState;
        default:
            return { account: action.account, password:action.password };
    }
};

export default reducer;
