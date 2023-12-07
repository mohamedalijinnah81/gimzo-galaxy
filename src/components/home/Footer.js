import React from 'react'
import '../../style/home/Footer.css'

const Footer = () => {
    const date = new Date();
  return (
    <footer>
        <p>Copyright &copy; {date.getFullYear()}. by Mohamed Ali Jinnah S A</p>
    </footer>
  )
}

export default Footer