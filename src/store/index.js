import { createStore, combineReducers} from "redux";
import CounterReducer from "./reducers/counter";
import ListReducer from "./reducers/list";

const reducers = combineReducers({
    counter: CounterReducer,
    list: ListReducer,
})

const store = createStore(reducers);

export default store;