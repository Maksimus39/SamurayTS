import React from 'react';
import classes from "./Post.module.css"

export const Post = () => {
    return (
        <div className={classes.item}>
            <img
                src="https://sneg.top/uploads/posts/2023-06/1687597602_sneg-top-p-ava-obshchenie-instagram-1.jpg"
                alt=""/>
            <span>Post 1</span>
            <div>
                <span>Like</span>
            </div>
        </div>
    );
};

