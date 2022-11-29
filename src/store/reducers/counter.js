import { SAYAC_ARTTIR, SAYAC_AZALT} from "../types";

const default_state = 0;

const reducer = ( state = default_state, action)=> {
    switch (action.type) {
        case SAYAC_ARTTIR:
            return state + 1;

        case SAYAC_AZALT:
            return state - 1;

        default:
            return state;
    }
}

export default reducer;