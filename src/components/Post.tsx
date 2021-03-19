import React, { props } from 'react';
import PostText from './PostText';

type Props = {
    text: string;
}

export default function Post({text}: Props): JSX.Element {
    return (
        <div>
            <div className= "text">
                <PostText text = {text} />
            </div>
            <div className="options">
            <div className="like">
                <button>Like</button>
            </div>
            </div>
            
        </div>
    )
}
