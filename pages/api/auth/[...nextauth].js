import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { DataTypes } from 'sequelize';
import sequelize from '../../../config/database';

// Initialize User model
const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Ensure the table exists
await User.sync();

export default NextAuth({
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            authorize: async (credentials) => {
                const user = await User.findOne({ where: { username: credentials.username } });
                if (user && user.password === credentials.password) {
                    return user;
                }
                return null;
            },
        }),
    ],
    database: process.env.DATABASE_URL,
});
