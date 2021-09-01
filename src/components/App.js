import siteContent from '../contents/';

function App() {
  const now = new Date();

  return (
    <div className="app">
      <header className="app-header">
        Works by e-sare
      </header>
      <main className="app-content">
        { 
          siteContent.links.map((c, idx) => (
            <section 
              className="content-section"
              key={idx}>
                <div className="content-section__img-content content-section__item">
                  <img className="content-section__img" src={c.imgSrc} alt={c.title}/>
                </div>
                <div className="content-section__description-content content-section__item">
                  <h2>{c.title}</h2>
                  <p>{c.about}</p>
                  <div className="content-section__cta">
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noreferrer">
                      <button className="button">See more</button>
                    </a>
                  </div>
                  { c.extra && (
                    <div className="content-section__extra">
                      <a
                        href={c.extra?.href}
                        target="_blank"
                        rel="noreferrer">
                        {c.extra?.cta}
                      </a>
                    </div>
                  ) }
                </div>
            </section>
          ))
        }
      </main>
      <footer className="app-footer">
        <div>{now.getFullYear()} by e-sare</div>
      </footer>
    </div>
  );
}

export default App;
