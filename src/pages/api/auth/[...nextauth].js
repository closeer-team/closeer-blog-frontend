import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

const options = {
  pages: {
    signIn: '/auth/signin'
  },
  providers: [
    Credentials({
      name: 'email e senha',
      credentials: {
        username: {
          label: 'E-mail',
          type: 'email',
          placeholder: 'email@exemplo.com'
        },
        password: { label: 'Senha', type: 'Sua senha...' }
      },
      authorize: async credentials => {
        // chamada para a database
        const user =
          credentials?.username === 'admin'
            ? { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
            : null;

        if (user) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      }
    })
  ]
};

export default (req, res) => NextAuth(req, res, options);
