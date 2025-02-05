import { useSession, signIn, signOut } from 'next-auth/react';
import { useState } from 'react';

export default function CMS() {
    const { data: session, status } = useSession();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content, author_id: session.user.id }),
        });
        const data = await res.json();
        console.log(data);
    };

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (!session) {
        return (
            <>
                <h1>You are not signed in</h1>
                <button onClick={() => signIn()}>Sign in</button>
            </>
        );
    }

    return (
        <>
            <h1>CMS Panel</h1>
            <button onClick={() => signOut()}>Sign out</button>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button type="submit">Create Post</button>
            </form>
        </>
    );
}
