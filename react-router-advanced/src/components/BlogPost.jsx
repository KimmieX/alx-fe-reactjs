import { useParams } from 'react-router-dom';

export default function BlogPost() {
  const { id } = useParams();
  return (
    <div>
      <h2>Blog Post #{id}</h2>
      <p>This is a dynamically routed blog post.</p>
    </div>
  );
}

