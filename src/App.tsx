import React from 'react';
import './App.css';

function App() {
    return (
        <div className={'app-wrapper'}>
            <header className='header'>
                <img src="https://seousluga.ru/files/images/izobrazhenie_2024-02-07_143427682.png" alt=""/>
            </header>

            <nav className='nav'>
                <div><a href="">Profile</a></div>
                <div><a href="">Messages</a></div>
                <div><a href="">News</a></div>
                <div><a href="">Music</a></div>
                <div><a href="">Settings</a></div>
            </nav>

            <div className='content'>
                <div>
                    <img
                        src="https://www.funnyart.club/uploads/posts/2022-05/1653886640_47-www-funnyart-club-p-kartinki-sotsialnikh-setei-krasivo-56.png"
                        alt=""/>
                </div>

                <div>
                    ava + description
                </div>

                <div>
                    My Posts
                    <div>
                        New Post
                    </div>
                    <div>Post 1</div>
                    <div>Post 2</div>
                </div>

            </div>
        </div>
    );
}

export default App;
