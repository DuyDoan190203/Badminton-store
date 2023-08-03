export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";
// this is just for demonstrating the basics of Redux(React state management) without Redux Toolkit
export interface CounterState {
  data: number;
  title: string;
}

const initialState: CounterState = {
  data: 42,
  title: 'Hello from Redux' 
}

export function increment(amount = 1){
  return {
    type: INCREMENT_COUNTER,
    payload: amount // can override and pass value to it 
  }
}
export function decrement(amount = 1){
  return {
    type: DECREMENT_COUNTER,
    payload: amount // the payload can override the DATA and pass value to it 
  }
}

export default function counterReducer(state = initialState, action: any) {
  switch (action.type) {
    case INCREMENT_COUNTER:
     return {
        ...state,
        data: state.data + action.payload
      }
    case DECREMENT_COUNTER:
      return {
        ...state,
        data: state.data - action.payload
      }
    default:
      return state;
  }
}