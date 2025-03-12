const Comment = ({ comment }) => {
    return (
      <div className="comment">
        <div className="comment-content">{comment.text}</div>
  
        {comment.replies && comment.replies.length > 0 && (
          <div className="replies">
            {comment.replies.map((reply) => (
              <div key={reply.id} className="reply">
                <div className="reply-line"></div> {/* Çizgi için div */}
                <Comment comment={reply} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  const Test = () => {
    return (
      <div className="comments-container">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    );
  };
  
  export default Test;
  