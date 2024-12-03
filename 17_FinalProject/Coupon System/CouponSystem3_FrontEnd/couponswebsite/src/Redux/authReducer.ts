import { ClientType } from "../Models/ClientType";

export class authState {
    id: string = "";
    name: string = "guest";
    token: string = "";
    clientType: string = ClientType.Guest;
    isLogged:boolean = false;
    rememberMe:boolean=false;
}

//login, logout, updateToken
export enum AuthActionType {
    login = "login",
    logout = "logout",
    updateToken = "updateToken",
}

export interface AuthAction {
    type: AuthActionType,
    payload?: any
}

export function loginAction(user: authState): AuthAction {
    return { type: AuthActionType.login, payload: user }
}

export function logoutAction(): AuthAction {
    return { type: AuthActionType.logout }
}

export function updateTokenAction(token: string): AuthAction {
    return { type: AuthActionType.updateToken, payload: token }
}



export function AuthReducer(currentState: authState = new authState(), action: AuthAction): authState {
    let newState = { ...currentState };
    
    switch (action.type) {
        case AuthActionType.login:
            // console.log("Auth Reducer - payload: ")
            // console.log(action.payload);
            newState = action.payload;
            if(action.payload.rememberMe===true){
                localStorage.setItem("jwt",action.payload.token);
            }
            else if(action.payload.rememberMe===false){
                localStorage.removeItem("jwt");
            }
            break;
        case AuthActionType.logout:
            // clear auth reducer
            newState = new authState();
            // clear session/local storage token data
            localStorage.removeItem("jwt");
            sessionStorage.removeItem("jwt");
            // Todo: clear all other reducer data - refresh?
            //Refresh page
            window. location. reload();
            break;
        case AuthActionType.updateToken:
            newState.token = action.payload;
            break;
    }
    return newState;
}