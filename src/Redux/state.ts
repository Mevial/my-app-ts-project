export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    name: string
    id: number

}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    messageForNewPost: string
    posts: Array<PostType>
}

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}


export type StoreType = {
    _state: RootStateType
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>

export const addPostAC = (postMessage: string) => {
    return {
        type: "ADD-POST",
        postMessage: postMessage
    } as const
}

export const updateNewPostTextAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}

const store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: "",
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'Hi, Yo', likesCount: 10}
            ]
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yi'},
                {id: 5, message: 'Ya'},
            ]
        },
        sidebar: {}
    },

    _onChange() {
        console.log("state changed")
    },
    subscribe(callback) {
        this._onChange = callback;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postMessage,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.messageForNewPost = '';
            this._onChange();
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.messageForNewPost = action.newText
            this._onChange();
        }


    }
}

export default store;