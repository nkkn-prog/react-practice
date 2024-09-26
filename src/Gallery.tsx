import { useState } from 'react'
import './App.css'

export function Profile() {
    return (
        <img
            src="https://i.imgur.com/MK3eW3As.jpg"
            alt="Katherine Johnson"
        />
    );
}
export default function Gallery() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <h1>Welcome to My Gallery</h1>
            </div>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
            <section>
                <h2>Amazing Scientists</h2>
                <Profile />
                <Profile />
                <Profile />
            </section>
        </>
    )
}

