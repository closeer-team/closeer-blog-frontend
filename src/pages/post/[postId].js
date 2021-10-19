import { useRouter } from 'next/router';

export default function Post(props) {
  const router = useRouter();
  const { postId } = router?.query;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <div>Post [{postId}]</div>;
}

export const getServerSideProps = async context => {
  return {
    props: {}
  };
};
