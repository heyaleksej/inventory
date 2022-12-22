import {createStore} from "vuex";

//x: 0 | 1 | 2 | 3 | 4
//y: 0 | 1 | 2 | 3 | 4

const initialState = {
    items: [
        {id: 1, color: '#7FAA65', name: 'Knife', position:[4,1], quantity: 1},
        {id: 2, color: '#0729FF', name: 'Gun', position:[4,2], quantity: 1},
        {id: 3, color: '#00FAD4', name: 'Bread', position: [1,3], quantity: 5},
        {id: 4, color: '#FF00C1', name: 'First aid kit', position:[0,0], quantity: 7},
    ],
    grid: [
        [{}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}],
    ],

};
// Create a new store instance.
export default createStore({
    state: initialState,
    getters: {
        getAllItems: state => state.items,
        getItemPosition:
            state =>
                ({x, y}) =>
                    state.items.filter(item => item.position[0] === x && item.position[1] === y),

        getAllCells(state) {
            return state.grid
        },
    },
    mutations: {
        initializeApp(state) {
            if (localStorage.getItem('items')) {
                state.items = JSON.parse(localStorage.items)
            }
        },
        setItemBySlot(state, { itemId, pos }) {
            state.items = state.items.map(item =>
                item.id == itemId
                    ? { ...item, position: pos}
                    : { ...item }
            )
        },
        setItemQuantity(state, { itemId, quantity }) {
            state.items = state.items.map(item =>
                item.id == itemId
                    ? { ...item, amount: item.quantity - quantity }
                    : { ...item }
            )
        },
    },
})

