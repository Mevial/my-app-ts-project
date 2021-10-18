import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../Redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FromsControls/FormsControls";

type FromDataType = {
    newPostText: string
}
type MyPostsType = {
    message: string
    posts: Array<PostType>
    addPost: (values: string) => void
    // dispatch: (action: ActionsTypes) => void
}


const MyPosts = React.memo((props: MyPostsType) => {
    console.log("RENDER YO")
    let postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    // let newPostElement = React.createRef();

    const onAddPost = (values: FromDataType) => {
        props.addPost(values.newPostText)
        // props.dispatch(addPostAC(props.message))
        // props.changeNewTextCallback('');
    }
    // const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     // let text = newPostElement.current.value;
    //     // props.updateNewPostText(text)
    //     props.updateNewPostText(e.currentTarget.value);
    //     // props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: (e.currentTarget.value)})
    // }


    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={onAddPost}/>
            <div className={styles.posts}>
                {postsElement}
            </div>
        </div>
    )
});


export default MyPosts


const maxLength10 = maxLengthCreator(10)
const AddNewPostForm: React.FC<InjectedFormProps<FromDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name="newPostText" placeholder="Enter your post"
                   validate={[required, maxLength10]}/>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm<FromDataType>({
    form: "postAddMessageForm"
})(AddNewPostForm)
