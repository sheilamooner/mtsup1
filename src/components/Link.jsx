// All external destinations are stripped for internal testing.
// Renders the same <a> markup/classes as the original, but goes nowhere.
export default function Link({ children, ...rest }) {
  return (
    <a href="#" onClick={(e) => e.preventDefault()} {...rest}>
      {children}
    </a>
  )
}
