import { useRouter } from 'next/router';

export default function Users(props) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <div>Todos os usuários</div>;
}

export const getServerSideProps = async context => {
  return {
    props: {}
  };
};
