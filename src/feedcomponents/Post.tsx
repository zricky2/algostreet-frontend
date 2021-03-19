import React from "react";
import PostText from "./PostText";
import Like from "./Like";

type Props = {
  text: string;
};

export default function Post({ text }: Props): JSX.Element {
  return (
    <div className="postbox">
      <div className="text">
        <PostText text={text} />
      </div>
      <div className="options">
        <div className="like">
          <Like />
        </div>
      </div>
    </div>
  );
}
