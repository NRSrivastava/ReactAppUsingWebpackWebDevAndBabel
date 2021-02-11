
export default function reducer(state={day:'1',dayData:{'1':[],'2':[],'3':[],'4':[],'5':[]}},action){
    switch (action.type) {
        case 'change':
            return {...state,day:action.payload};

        case 'setData':
            return {...state,dayData:{...state.dayData,...action.payload}};

            
        default:
            return state;
    }
}