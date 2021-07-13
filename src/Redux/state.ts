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

let state: RootStateType = {
    profilePage: {
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
}


export const addPost = (postMessage: string) => {
    const newPost: PostType = {
        id: new Date().getTime(),
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
}


export default state;