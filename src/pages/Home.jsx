import { useEffect, useState } from 'react';
import fetchData from '../api/fetchData';
import Header from '../components/Header';
import Error from '../components/Error';
import Loading from '../components/Loader';
import PostList from '../components/PostList';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const result = await fetchData();
                setPosts(result.children);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    if (loading) return <Loading />;
    if (error) return <Error message={error.message} />;

    return (
        <div className="flex justify-center overflow-hidden">
            <div className="w-full max-w-screen-lg px-4 py-6">
                <Header />
                <PostList posts={posts} />
            </div>
        </div>
    );
};

export default Home;
