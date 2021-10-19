import { useRouter } from 'next/router';

export default function Tags(props) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <div>Todas as tags</div>;
}

export const getServerSideProps = async context => {
  return {
    props: {}
  };
};
