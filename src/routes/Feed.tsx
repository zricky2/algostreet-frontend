import React, { useState, useEffect } from 'react';
import PostText from '../components/PostText'

export default function Feed() {
    const [posts, setPosts] = useState();
    useEffect(() => {
        getFeed();
    }, [])

    return (
        <div>
            <PostText text = 'pop' />
            <PostText text = 'hello world' />
        </div>
    )

    function getFeed():void {
        
    }
}
