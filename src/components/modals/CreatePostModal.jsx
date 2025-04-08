import React, { useEffect, useRef } from 'react';
import SelectAccountDropdown from '../dropdwons/SelectAccountDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, setPostImage, setPostText } from '../../redux/slices/postSlice';

const CreatePostModal = () => {
    const dispatch = useDispatch();
    const { showModal, postText, postImage } = useSelector(state => state.post);

    const textareaRef = useRef(null);
    const fileInputRef = useRef(null);
    const modalRef = useRef(null);

    const isActive = postText.trim().length > 0 || postImage !== null;

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                dispatch(closeModal());
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dispatch]);

    const handleInput = () => {
        const textarea = textareaRef.current;
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    };

    const handleImageSelect = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            dispatch(setPostImage(imageUrl));
        }
    };

    const icons = [
        { id: 1, img: '/assets/bold-icon.svg' },
        { id: 2, img: '/assets/italic-icon.svg' },
        { id: 3, img: '/assets/underline-icon.svg' },
        { id: 4, img: '/assets/smile-icon.svg' },
        { id: 5, img: '/assets/link-icon.svg' },
        { id: 6, img: '/assets/list-icon.svg' },
        { id: 7, img: '/assets/align-icon.svg' },
        { id: 8, img: '/assets/camera-icon.svg' },
        { id: 9, img: '/assets/file-add.svg' },
        { id: 10, img: '/assets/upload-icon.svg' }
    ];

    return (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div className="modal-content" ref={modalRef}>

                    <div className="header d-flex align-items-center">
                        <div className="profile-picture">
                            <img src="/assets/profile-picture.png" alt="" />
                        </div>
                        <SelectAccountDropdown />
                    </div>

                    <textarea
                        ref={textareaRef}
                        placeholder="Fikirlərini paylaş?!"
                        value={postText}
                        onChange={(e) => {
                            dispatch(setPostText(e.target.value));
                            handleInput();
                        }}
                        onInput={handleInput}
                        rows={1}
                    />

                    {postImage && (
                        <div className="post-img">
                            <img src={postImage} alt="image" />
                            <button
                                className="btn-trash"
                                onClick={() => dispatch(setPostImage(null))}
                            >
                                <img src="/assets/trash-icon.svg" alt="Sil" />
                            </button>
                        </div>
                    )}

                    <div className="tools-container d-flex align-items-center justify-content-end">
                        <div className="tools d-flex">
                            {icons.map((icon) => (
                                <button
                                    key={icon.id}
                                    className="tool-btn"
                                    onClick={() => {
                                        if (icon.id === 9 && fileInputRef.current) {
                                            fileInputRef.current.click();
                                        }
                                    }}
                                >
                                    <img src={icon.img} />
                                </button>
                            ))}
                        </div>

                        <button className={`btn btn-primary ${isActive ? 'active' : ''}`} disabled={!isActive}>
                            Paylaş
                        </button>
                    </div>

                    <button
                        onClick={() => dispatch(closeModal())}
                        className="custom-btn-close"
                        type="button"
                    >
                        <img src="/assets/close-icon.svg" alt="Kapat" />
                    </button>

                    <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        ref={fileInputRef}
                        onChange={handleImageSelect}
                    />
                </div>
            </div>
        </div>
    );
};

export default CreatePostModal;
