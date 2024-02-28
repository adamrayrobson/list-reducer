import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/", { replace: true })
  }

  return (
    <section className="not-found-section">
      <h1>This route has not been found.</h1>
      <button onClick={handleNavigate}>Go to Home</button>
    </section>
  )
}
