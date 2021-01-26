let initialState = {};

export type InitialStateType = typeof initialState
let sidebar = (state: InitialStateType = initialState, action: any): InitialStateType => {
    return state;
}

export default sidebar;