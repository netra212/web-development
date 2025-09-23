import axios from "axios";

export function getServerSideProps(){

}

export function getStaticProps() {

}

export default async function BlogPage({ params }: any) {
  const blogId = (await params).blogid;
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${blogId}`
  );

  const data = response.data;

  return (
    <div>
      Blog Page {JSON.stringify(blogId)}
      <br />
      title: {data.title}
      body: {data.body}
    </div>
  );
}








