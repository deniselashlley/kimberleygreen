import * as React from 'react'

const Footer = () => {
  var date = new Date()
  var year = date.getFullYear()

  return (
    <footer role="footer" className="footer">
    <div className="container">
      <p>Copyright &copy; <span>{year}</span> Kimberley Green.</p>
    </div>
  </footer>
  )
}

export default Footer
