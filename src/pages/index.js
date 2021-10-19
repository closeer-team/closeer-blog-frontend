import { signIn, signOut, useSession } from 'next-auth/react';
import * as S from '~src/components/pages/home';

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      <S.Title>Bem-vindo</S.Title>
      {!session && (
        <div style={{ marginTop: 20, marginLeft: 20 }}>
          Conecete-se <br />
          <button onClick={signIn}>Entrar</button>
        </div>
      )}
      {session && (
        <div style={{ marginTop: 20, marginLeft: 20 }}>
          Conectado com {session.user.email} <br />
          <button onClick={signOut}>Sair</button>
        </div>
      )}
    </div>
  );
}
