import {addPostAC, deletePost, profileReducer} from "./profile-reducer";

let state = {
    messageForNewPost: "",
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'Hi, Yo', likesCount: 10},
    ],
    profile: null,
    status: ""
};
it('length should be incremented', () => {
    //1. test data
    let action = addPostAC('it-kamasutra.com')

    //2. action

    let newState = profileReducer(state, action)

    //3. expectation

    expect(newState.posts.length).toBe(3)
})


it('message of new post should be correct', () => {
    //1. test data
    let action = addPostAC('it-kamasutra.com')

    //2. action

    let newState = profileReducer(state, action)

    //3. expectation

    expect(newState.posts[2].message).toBe('it-kamasutra.com')
})


it('after deleting length of message should be decrement', () => {
    //1. test data
    let action = deletePost(1)

    //2. action

    let newState = profileReducer(state, action)

    //3. expectation

    expect(newState.posts.length).toBe(1)
})

it('after deleting length shouldnt be decrement if id is correct', () => {
    //1. test data
    let action = deletePost(100)

    //2. action

    let newState = profileReducer(state, action)

    //3. expectation

    expect(newState.posts.length).toBe(2)
})



