import React, { useState, useEffect } from 'react';
import Post from '../feedcomponents/Post'

export default function Feed() {
    const [posts, setPosts] = useState();
    useEffect(() => {
        getFeed();
    }, [])

    return (
        <div>
            <Post text = 'pop' />
            <Post text = 'hello world' />
            <Post text = 'pop' />
            <Post text = 'hello world' />
        </div>
    )

    function getFeed():void {
        
    }
}
