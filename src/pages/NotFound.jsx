import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." />
      <section className="bg-navy-950 min-h-[70vh] flex items-center">
        <div className="max-w-2xl mx-auto px-6 text-center py-24">
          <div className="font-mono text-brand-400 text-sm mb-4">ERROR 404</div>
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl">
            This page went off-grid.
          </h1>
          <p className="mt-5 text-slate-light text-lg">
            The page you're looking for doesn't exist or has moved.
          </p>
          <Link to="/" className="btn-primary mt-8 inline-flex">
            Back to Home
          </Link>
        </div>
      </section>
    </>
  )
}
