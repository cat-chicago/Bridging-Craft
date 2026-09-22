import './styles.css'

const { useState } = React
const { createRoot } = ReactDOM

const Arrow = () => <span aria-hidden="true">↗</span>
const substack = 'https://catalina348157.substack.com/p/bridging-chapters'
const makers = [
  {
    "name": "Maitamá Tejidos Ancestrales",
    "place": "Sonsón · Antioquia",
    "craft": "Ancestral loom weaving",
    "text": "Yeison Marín carries forward Sonsón’s wool-weaving tradition through Maitamá. Ruanas and perrileño cushions reveal a textile language rooted in family knowledge and the patient rhythm of the loom.",
    "url": "https://colombiaartesanal.com.co/artesanos/yeison-marin/",
    "source": "Colombia Artesanal"
  },
  {
    "name": "Carmen Experimental",
    "place": "El Carmen de Viboral · Antioquia",
    "craft": "Handmade, hand-decorated ceramics",
    "text": "A contemporary interpretation of El Carmen de Viboral’s ceramic tradition. Tableware, vases and decorative pieces carry the character of a place where clay and hand-painted detail are part of everyday cultural life.",
    "url": "https://carmenexperimental.com/nosotros/",
    "source": "Carmen Experimental"
  },
  {
    "name": "Acanto Artesanías",
    "place": "Medellín · Antioquia",
    "craft": "Woodworking & marquetry",
    "text": "Guillermo Arturo Salazar Yepes works with wood and taracea, creating objects that draw on architecture, culture and nature. Boxes, trays and other crafted pieces invite a closer look at grain, pattern and construction.",
    "url": "https://www.medellin.gov.co/es/secretaria-desarrollo-economico/direccion-de-negocios/directorio-empresarial/articulos-para-el-hogar/",
    "source": "Alcaldía de Medellín"
  },
  {
    "name": "Carrielarte y Guarnielería R. Darío Agudelo",
    "place": "Jericó · Antioquia",
    "craft": "Traditional leatherwork",
    "text": "Rubén Darío Agudelo and his family preserve the layered construction and leatherworking knowledge of the Antioquian carriel. Their work is featured here for its living cultural heritage and the possibilities it opens for understanding craft.",
    "url": "https://colombiaartesanal.com.co/artesanos/ruben-agudelo/",
    "source": "Colombia Artesanal"
  },
  {
    "name": "Bimbral",
    "place": "Medellín · Antioquia",
    "craft": "Wicker & iraca basketry",
    "text": "Dora Bonilla’s fine-arts background meets José Alfonso Cerón’s family-taught fiber craft. Based in Medellín, their workshop brings together basketry knowledge with roots in Huila and a creative story that also passes through Cauca.",
    "url": "https://colombiaartesanal.com.co/artesanos/dora-bernarda-bonilla-ipia-y-jose-alfonso-ceron/",
    "source": "Colombia Artesanal"
  }
]

function App() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return <>
    <header className="nav">
      <div className="brand"><a className="wordmark" href="#top" onClick={close}>Bridging <i>Craft</i></a><p className="brand-credit">A page from <a href={substack}>Bridging Chapters</a></p></div>
      <button className="menu" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="site-menu">{open ? 'Close' : 'Menu'}</button>
      <nav id="site-menu" className={open ? 'open' : ''} aria-label="Main navigation">
        <a href="#about" onClick={close}>About</a><a href="#artisans" onClick={close}>Artisans</a><a href="#notes" onClick={close}>Notes</a>
      </nav>
    </header>
    <main id="top">
      <div className="brand-banner"><img src={`${import.meta.env.BASE_URL}images/bridging-craft-header-title-case.png`} alt="Bridging Craft — Cultivating discernment at the intersection of art, heritage, and culture" fetchPriority="high" /></div>
      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow">Colombian craft · Collectors · Interiors</p>
        <h1 id="hero-title">Between the <em>made</em><br />and the spaces<br />we inhabit.</h1>
        <div className="hero-bottom"><div><p>Colombian craft holds stories worth living with. I am building connections that bring those stories into thoughtfully collected lives and spaces. It begins with understanding the maker, the material, and the cultural value of a piece. Drawing on my professional knowledge, Colombian cultural roots, and lived experiences, I am creating a space for dialogue and discovery for those seeking beauty and authentic craft.</p><a className="text-link intro-cta" href="contact.html">Begin a conversation <Arrow /></a></div><a href="#about" className="round-link" aria-label="Read the story">↓</a></div>
        <div className="arc" aria-hidden="true"></div>
      </section>

      <section className="manifesto" id="about" aria-labelledby="about-title">
        <p className="side-label">01 — A new vantage</p>
        <div><h2 id="about-title">Learning to become<br />the bridge.</h2><p className="intro">After 20 years in marketing in the U.S. consumer packaged goods (CPG) industry, I am turning toward art, craft, and interiors, bringing a new focus to a career built on understanding people.</p><div className="story-copy" id="path"><p>My studies span international business and an MBA at Universidad EAFIT in Medellín, Colombia, a master’s in corporate and multicultural communication at DePaul University in Chicago, and an online Brand Management Certificate from Cornell University.</p><p>My brand-building experience includes Häagen-Dazs and both alcoholic and non-alcoholic beverages, from wine, tequila, and bourbon to powdered beverage brands. I am also a Certified Specialist of Wine through the Society of Wine Educators. Collaborating with designers and creative teams taught me to turn insights into clear direction—experience I now bring to connecting craft, people, and place.</p><p>I completed the Interior Design Institute (IDI) online program to build fluency in space, materials, and design thinking, ahead of a full-time interior design diploma in Florence, Italy. Along the way, I am developing my eye, learning from makers, and building connections across the arts.</p><p>Bridging Craft is a work in progress. This page will evolve as I deepen my understanding and discover new ways to connect craft with interiors.</p><img className="idi-logo" src={`${import.meta.env.BASE_URL}images/idi-wide.png`} alt="Interior Design Institute — Graduate" loading="lazy" /></div></div>
      </section>

      <section className="principles" aria-labelledby="principles-title">
        <p className="side-label">02 — Core vision & philosophy</p>
        <div><h2 id="principles-title">A deeper relationship<br />with beauty.</h2><p className="vision">To deepen humanity’s relationship with beauty by developing exceptional discernment and becoming a trusted interpreter of artistic and cultural value within the design ecosystem.</p><div className="principle-list"><p><b>01</b> Understand the maker and the material</p><p><b>02</b> Recognize artistic and cultural value</p><p><b>03</b> Connect craft with people and interiors</p></div></div>
      </section>

      <section className="artisans" id="artisans" aria-labelledby="artisans-title"><div className="section-head"><p className="side-label">03 — Featured Colombian artisans</p><div><h2 id="artisans-title">Five makers.<br />Many ways of seeing.</h2><p className="makers-intro">Five workshops from my evolving selection, each offering a distinct encounter with material, place and inherited knowledge. Featured for discovery; inclusion does not imply representation or a commercial partnership.</p></div></div><div className="maker-list">{makers.map((maker, index) => <article className="maker" key={maker.name}><span className="maker-number">0{index + 1}</span><div><p className="eyebrow">{maker.place}</p><p className="craft">{maker.craft}</p><h3>{maker.name}</h3></div><div><p className="maker-description">{maker.text}</p><a href={maker.url} className="text-link">Explore the workshop <Arrow /></a><p className="source-credit">Source: {maker.source}</p></div></article>)}</div></section>

      <section className="catalog-intro" id="catalog" aria-labelledby="catalog-title">
        <p className="side-label">04 — The catalog</p><div><h2 id="catalog-title">Craft to live with.</h2><p>Discover an evolving selection of Colombian textiles, explore the details, and gather the pieces that speak to you.</p><a className="text-link" href={`${import.meta.env.BASE_URL}catalog/`}>Explore the catalog <Arrow /></a></div>
      </section>

      <section className="notes" id="notes" aria-labelledby="notes-title">
        <p className="eyebrow">Notes from the threshold</p><h2 id="notes-title">An evolving practice<br />of <em>attention.</em></h2>
        <p>Bridging Craft is a place to follow the questions, references, and encounters that gather along the way.</p>
        <a className="text-link" href={substack}>Read Bridging Chapters <Arrow /></a>
      </section>
    </main>
    <footer><a className="wordmark" href="#top">Bridging <i>Craft</i></a><p>Learning · looking · in between</p><p>© {new Date().getFullYear()}</p></footer>
  </>
}

createRoot(document.getElementById('root')).render(<App />)
