import styles from './Comment.module.css'

function Comment({comment}) {
    console.log(comment);
    return (
        <div className={styles.container}>
                    <div className={styles.comment}>
                        <div className={styles.comment_sender}>
                            <span>نظر: </span>
                            <span>
                                {comment.sender}
                            </span>
                        </div>
                        <div className={styles.comment_text}>
                        {comment.text}
                        </div>
                    </div>
                    {
                        comment.replies.length 
                        ?  comment.replies.map(reply => 
                            <div className={styles.replies} key={`reply-${Math.floor(Math.random() * 200000)}`}>
                                <div className={styles.reply}>
                                    <div className={styles.reply_sender}>
                                    <span>پاسخ:</span>
                                    <span>
                                        {reply.sender}
                                    </span>
                                    </div>
                                    <div className={styles.reply_text}>
                                        {reply.text}
                                    </div>
                                </div>
                            </div> 
                            )  
                                
                        : ''

                    }
                    
                </div>
    )
}

export default Comment
