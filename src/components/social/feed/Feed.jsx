import React from 'react'
import CreatePost from './CreatePost'
import Post from './Post'
import CreatePostModal from '../../modals/CreatePostModal'
import { useSelector } from 'react-redux';

const Feed = ({ groupId }) => {


    const showModal = useSelector(state => state.post.showModal);




    return (
        <div className="posts-container d-flex flex-column">


            {/* ✅ Sadece grup sayfasında göster */}
            {groupId && (
                <div className="group-header d-flex align-items-center">
                    <div className="group-img">
                        <img src="/assets/group-img7.png" alt="" />
                    </div>

                    <div className="group-info d-flex flex-column">
                        <span className='name'>Mühasibatlıq uçotunun idarəedilməsi</span>
                        <span className='description'>Bu qrup mühasibatlıq həllərinin təqdim edilməsi üçün qurulmuşdur</span>
                    </div>

                    <button className="btn-more">
                        <img src="/assets/more-icon.svg" alt="" />
                    </button>
                </div>
            )}

            <CreatePost />

            <div className="line"></div>

            <Post />

            {showModal && (
                <CreatePostModal />
            )}


        </div>
    )
}

export default Feed