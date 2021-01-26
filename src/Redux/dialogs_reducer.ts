import { InferActionsTypes } from "./redux-store";

const SEND_MESSAGE = 'SEND_MESSAGE';

type DialogsType = {
    id: number
    name: string
    ava: string
}

type MessagesType = {
    id: number
    messages: string
}

let initialState = {
    dialogsData: [
        { id: 1, name: 'Inna', ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKD17RdQJlmy3HC_xwalAsXG5kntjZ6odskQ&usqp=CAU" },
        { id: 2, name: 'Kostya', ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR99VPaQ2koX9Pb5PQOL3gR4d__muqqWQdp_A&usqp=CAU" },
        { id: 3, name: 'nika', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRlcqpJ_XUN83eoYMEXHFB54R3XUcMQURbYg&usqp=CAU' },
        { id: 4, name: 'Alex', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEuQKXQsRaGiiPYcspDFiz5IvOZh_HtY8T0g&usqp=CAU' },
        { id: 5, name: 'Kristina', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRP9FHzU7lQsg1bBQDEPWdpAATTFqpCz3K0MA&usqp=CAU>' },
        { id: 6, name: 'Anetta', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjNOi7cKFqfhNojxm2rEEogwmJkDk_6GsZYA&usqp=CAU>' }
    ] as Array<DialogsType>,

    messagesData: [
        { id: 1, messages: 'Ich bin so begeistert' },
        { id: 2, messages: 'Guten Abend' },
        { id: 3, messages: 'Kann ich mit dir sprechen?' },
    ] as Array<MessagesType>,
}

export let dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case 'SN/dialogs/SEND_MESSAGE':
            let newMessageText = action.newMessageText;
            return {
                ...state,
                messagesData: [...state.messagesData, {
                    id: 7,
                    messages: newMessageText
                }],
            };
        default:
            return state;
    }
}



export const actions = {
    sendMessageCreator: (newMessageText: string) => ({ type: 'SN/dialogs/SEND_MESSAGE', newMessageText }) as const
}

export type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>

