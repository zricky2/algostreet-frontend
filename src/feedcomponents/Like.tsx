import React, { useState, useEffect } from 'react'

export default function Like() {
    const [likeState, setLikeState] = useState('Like');
    const [likeCount, setLikeCount] = useState(0);

    useEffect(() => {

    },[])

    return (
        <div>
            <button>{likeState}</button>
            {likeCount}
        </div>
        
    )
}
