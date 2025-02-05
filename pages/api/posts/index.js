import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize(process.env.DATABASE_URL);

const Post = sequelize.define('Post', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    author_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

export default async (req, res) => {
    await sequelize.sync();
    const { method } = req;

    switch (method) {
        case 'GET':
            const posts = await Post.findAll();
            res.status(200).json(posts);
            break;
        case 'POST':
            const { title, content, author_id } = req.body;
            const post = await Post.create({ title, content, author_id });
            res.status(201).json(post);
            break;
        // ...existing code for PUT and DELETE methods...
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
};
