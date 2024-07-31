import Card from './Card';

const PostList = ({ posts }) => (
    <section>
        {posts.map((post) => (
            <Card key={post.data.id} data={post.data} />
        ))}
    </section>
);

export default PostList;
