import profileReducer from './profile_reducer';
import { dialogsReducer } from './dialogs_reducer';
import sidebar from './sidebar_reducer';




let render = () => {
    console.log(1);
}

export let store = {
    state: {
        profilePage: {
            postData: [
                { id: 1, message: 'how are you', like: 3 },
                { id: 2, message: 'Wie geht es dir', like: 12 },
                { id: 3, message: 'Yoooooo', like: 10 }
            ],
            newPostText: 'it-kamasutra'
        },
        messagesPage: {
            dialogsData: [
                { id: 1, name: 'Inna', ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKD17RdQJlmy3HC_xwalAsXG5kntjZ6odskQ&usqp=CAU" },
                { id: 2, name: 'Kostya', ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR99VPaQ2koX9Pb5PQOL3gR4d__muqqWQdp_A&usqp=CAU" },
                { id: 3, name: 'nika', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRlcqpJ_XUN83eoYMEXHFB54R3XUcMQURbYg&usqp=CAU' },
                { id: 4, name: 'Alex', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEuQKXQsRaGiiPYcspDFiz5IvOZh_HtY8T0g&usqp=CAU' },
                { id: 5, name: 'Kristina', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRP9FHzU7lQsg1bBQDEPWdpAATTFqpCz3K0MA&usqp=CAU>' },
                { id: 6, name: 'Anetta', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjNOi7cKFqfhNojxm2rEEogwmJkDk_6GsZYA&usqp=CAU>' }],

            messagesData: [
                { id: 1, messages: 'Ich bin so begeistert' },
                { id: 2, messages: 'Guten Abend' },
                { id: 3, messages: 'Kann ich mit dir sprechen?' },
                { id: 4, messages: 'Ich hole das ab' },
                { id: 5, messages: 'alles ok' },
                { id: 6, messages: 'keine Sorge' },
                { id: 8, messages: '.' }],

            newMessageText: ''
        },

        sidebar: [
            { id: 1, ava: 'img', name: 'Kostya' },
            { id: 2, ava: 'img', name: 'Inna' },
            { id: 3, ava: 'img', name: 'Alex' }
        ]


    },

    subscribe(observer) {
        render = observer;
    },

    dispatch(action) {
        this.state.messagesPage = dialogsReducer(this.state.messagesPage, action);
        this.state.profilePage = profileReducer(this.state.profilePage, action);
        this.state.sidebar = sidebar(this.state.sidebar, action);

        render(this.state);
    }

}








