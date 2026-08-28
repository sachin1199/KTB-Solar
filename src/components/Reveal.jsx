import useInView from '../hooks/useInView'


export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const [ref, isInView] = useInView()

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: isInView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}
