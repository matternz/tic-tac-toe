import { createStore } from 'redux'

import { rootReducer} from '..'

export default function configureStor () {
    return createStore(rootReducer)
}