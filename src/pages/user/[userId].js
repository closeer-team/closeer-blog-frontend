import { useRouter } from 'next/router';

export default function User(props) {
  const router = useRouter();
  const { userId } = router?.query;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <div>Usuário [{userId}]</div>;
}

export const getServerSideProps = async context => {
  return {
    props: {}
  };
};
