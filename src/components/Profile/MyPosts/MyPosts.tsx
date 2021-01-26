import React from 'react';
import cl from './MyPosts.module.css';
import Post from './Post/Post';
import AddPostForm from './AddPostForm/AddPostForm';
import { PostDataType } from '../../../types/types';

export type MapPropsType = {
    posts: Array<PostDataType>
}
export type DispatchPropsType = {
    addPostActionCreator: (newPostBody: string) => void
}

export type AddPostFormValuesType = {
    newPostBody: string
}
const MyPosts: React.FC<MapPropsType & DispatchPropsType> = (props) => {

    let postArr = props.posts.map(post => <Post key={post.id} message={post.message} like={post.id} />)

    const onAddPost = (values: AddPostFormValuesType) => {
        props.addPostActionCreator(values.newPostBody);

    };

    return (
        <div className={cl.myPosts}>
            <h3>My post</h3>
            <AddPostForm onSubmit={onAddPost} />
            <div className={cl.posts}>
                {postArr}
            </div>
        </div >
    );
};

const MyPostsMemorized = React.memo(MyPosts);

export default MyPostsMemorized;