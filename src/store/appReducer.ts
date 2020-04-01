
export interface AppState {
 clickCount: number
}

export const INITIAL_STATE:AppState = {
  clickCount: 0
}

export const CLICK_ACTION_INCREMENT = "CLICK_DECREMENT";
export const CLICK_ACTION_DECREMENT = "CLICK_INCREMENT";

export interface CLICK_ACTION_INCREMENT {
  type: typeof CLICK_ACTION_INCREMENT
}

export interface CLICK_ACTION_DECREMENT  {
  type: typeof CLICK_ACTION_DECREMENT
}

export type AppAction = CLICK_ACTION_DECREMENT | CLICK_ACTION_INCREMENT;


// export function startClickAction() {
//   return (dispatch: Dispatch<AppAction>, getState: () => AppState) => {
//     dispatch(setClickAction());
//   }
// }

export function increaseCounter() : AppAction {
  return {
    type: CLICK_ACTION_INCREMENT
  }
}

export function decreaseCounter() : AppAction {
  return {
    type: CLICK_ACTION_DECREMENT
  }
}

export const appReducer = (state:AppState = INITIAL_STATE , action: AppAction): AppState => {
  switch(action.type) {

    case "CLICK_INCREMENT" :
      return {
        ...state,
        clickCount: ++state.clickCount
      }
    
    case "CLICK_DECREMENT" :
      return {
        ...state,
        clickCount: --state.clickCount
      }
    
    default:
      return state
  }
}

