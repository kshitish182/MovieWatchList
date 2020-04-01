import { createStore, 
  // combineReducers 
} from 'redux';
import { appReducer, 
  // AppState 
} from './appReducer';


const store = createStore(appReducer);

export default store;