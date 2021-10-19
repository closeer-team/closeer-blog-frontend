import { useRouter } from 'next/router';

export default function Category(props) {
  const router = useRouter();
  const { tagId } = router?.query;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <div>Posts da tag [{tagId}]</div>;
}

export const getServerSideProps = async context => {
  return {
    props: {}
  };
};
