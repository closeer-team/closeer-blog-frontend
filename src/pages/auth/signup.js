import { useRouter } from 'next/router';
import * as S from '~components/pages/home';

export default function SignUp() {
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
      <S.Title>Criar conta</S.Title>
      {router.query.error && (
        <span style={{ margin: '20px 0px', color: 'red' }}>
          Credenciais inválidas
        </span>
      )}
      <form style={{ width: '100%' }}>
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
          Criar
        </button>
      </form>
      <button
        style={{ padding: 10, marginTop: 10 }}
        onClick={() => router.push('/signin')}
      >
        Já tem conta? Entre
      </button>
    </div>
  );
}
