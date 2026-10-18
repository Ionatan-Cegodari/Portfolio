const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#recent', label: 'Projects' },
  { href: '#education', label: 'Education' },
]

function Nav() {
  return (
    <nav className="nav">
      <div className="nav__inner">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="nav__link">
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Nav
