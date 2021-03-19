import React, { props } from 'react';

type Props = {
    text: string;
  }

export default function PostText({text}: Props): JSX.Element {
    return (
        <div>
            {text}
        </div>
    )
}
