import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <h1>Page not found</h1>
      <p>
        Please, go to main page:{' '}
        <Link to="/">
          <b>Link</b>
        </Link>
      </p>
    </>
  );
}
