import { Navigate } from 'react-router-dom';

export default function NotFound() {

  function handleNavigate() {
    return <Navigate to="/" replace={true} />
  }
  return (
    <section className="not-found-section">
      <h1>This route has not been found.</h1>
      <button onClick={handleNavigate}>Go to home</button>
    </section>
  )
}
