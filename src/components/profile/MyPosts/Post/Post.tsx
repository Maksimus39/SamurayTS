import React from "react";

type Props = {
    like: number
    message: string
}
export const Post = ({like, message}: Props) => {
    return (
        <div>
            <div> Post:</div>
            <img
                src="https://avatars.mds.yandex.net/i?id=c553ace010a735a0fb7d8ca03c41893742002beb-5498202-images-thumbs&n=13"
                alt=""/>
            <div>
                <div>
                    <div>Like: {like}</div>
                    <div>Message: {message}</div>
                </div>
            </div>
        </div>
    )
}