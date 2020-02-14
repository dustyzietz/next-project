import Layout from '../components/Layout';
import Link from 'next/link';
import useSWR from 'swr';

function fetcher(url) {
  return fetch(url).then(r => r.json());
}


export default function Index() {
  const getdata = async ( ) => {
     const { data, error } =  await useSWR('/api/getAllUsers', fetcher);
     console.log(data);
}
const setQuote = async ( ) => {
  const { data, error } =  await useSWR('/api/postQuote', fetcher);
  console.log(data);
}
getdata()
  return (
    <Layout>
    <form onSubmit={setQuote}>
      <input type="text" name="author" placeholder="Your Name" />
      <br/>
      <input type="text" name="quote" placeholder="Your Quote" />
      <br/>
      <input type="submit" value="submit" />
    </form>
   
  </Layout>
  );
}