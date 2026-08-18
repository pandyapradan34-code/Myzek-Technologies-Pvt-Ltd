import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page page-notfound">
      <div className="container section notfound-content" data-aos="fade-up">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <Link className="btn btn-accent" to="/">
          Back to Home
        </Link>
      </div>
    </div>
  )
}
