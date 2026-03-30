export default function Layout({ children }) {
  return (
    <>
      <a className="skipLink" href="#home">
        Skip to content
      </a>

      {/* header (fixed) */}
      <header className="header">
        <div className="container headerInner">
          <div className="brand">Portfolio</div>

          <nav className="nav">
            <a href="#profile">profile</a>
            <a href="#skills">skills</a>
            <a href="#experience">experience</a>
          </nav>
        </div>
      </header>

      {/* Main contents */}
      <main className="main">{children}</main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footerInner">© 2026. MoonByeongWook. All rights reserved.</div>
      </footer>
    </>
  )
}
