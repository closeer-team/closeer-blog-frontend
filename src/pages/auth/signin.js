import { getCsrfToken, getSession } from 'next-auth/react';
import * as S from '~components/pages/home';

import { useRouter } from 'next/router';

export default function SignIn({ csrfToken }) {
  const router = useRouter();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '300px',
        width: '100%',
        background: 'ededed',
        padding: 10,
        margin: '30px auto 0'
      }}
    >
      <button
        style={{ padding: 10, marginBottom: 10 }}
        onClick={() => router.back()}
      >
        Voltar
      </button>
      <S.Title>Fazer login</S.Title>
      {router.query.error && (
        <span style={{ margin: '20px 0px', color: 'red' }}>
          Credenciais inválidas
        </span>
      )}
      <form
        style={{ width: '100%' }}
        method="post"
        action="/api/auth/callback/credentials"
      >
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <label
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            marginTop: 12
          }}
        >
          E-mail
          <input style={{ padding: 10 }} name="username" type="text" />
        </label>
        <label
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            marginTop: 12
          }}
        >
          Senha
          <input style={{ padding: 10 }} name="password" type="password" />
        </label>
        <button
          style={{ width: '100%', marginTop: 30, padding: 10 }}
          type="submit"
        >
          Entrar
        </button>
      </form>
      <button
        style={{ padding: 10, marginTop: 10 }}
        onClick={() => router.push('/signup')}
      >
        Ainda não tem conta? Cadastre-se
      </button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: { destination: '/' }
    };
  }

  return {
    props: {
      csrfToken: await getCsrfToken(context)
    }
  };
}
