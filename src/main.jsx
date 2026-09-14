import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const Arrow = () => <span aria-hidden="true">↗</span>

function App() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return <>
    <header className="nav">
      <a className="wordmark" href="#top" onClick={close}>Bridging <i>Craft</i></a>
      <button className="menu" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="site-menu">{open ? 'Close' : 'Menu'}</button>
      <nav id="site-menu" className={open ? 'open' : ''} aria-label="Main navigation">
        <a href="#about" onClick={close}>About</a><a href="#path" onClick={close}>The path</a><a href="#notes" onClick={close}>Notes</a>
      </nav>
    </header>
    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow">A practice in becoming</p>
        <h1 id="hero-title">Between the<br /><em>made</em> and<br />the imagined.</h1>
        <div className="hero-bottom"><p>Bridging Craft is a record of crossing into the art and design world—with attention, humility, and an enduring curiosity for how things come to life.</p><a href="#about" className="round-link" aria-label="Read the story">↓</a></div>
        <div className="arc" aria-hidden="true"></div>
      </section>

      <section className="manifesto" id="about" aria-labelledby="about-title">
        <p className="side-label">01 — A new vantage</p>
        <div><h2 id="about-title">A career can be a foundation, not a finish line.</h2><p className="intro">After two decades in marketing, I am making a deliberate turn toward art, materiality, and space. Not away from what came before, but toward a different way of seeing.</p></div>
        <p className="quote">“The work begins with learning to look.”</p>
      </section>

      <section className="path" id="path" aria-labelledby="path-title">
        <div className="section-head"><p className="side-label">02 — The path</p><h2 id="path-title">Learning the language<br />of design.</h2></div>
        <div className="timeline">
          <article><span>01</span><h3>Two decades<br />in marketing</h3><p>A practiced understanding of audiences, ideas, and the subtle work of making connections.</p></article>
          <article><span>02</span><h3>IDI online<br />program</h3><p>Study in space, materials, and design thinking—building fluency in the field’s language, not claiming a practice within it.</p></article>
          <article><span>03</span><h3>Florence,<br />on the horizon</h3><p>A full-time interior design diploma awaits, alongside the slower work of developing an eye and a community across the arts.</p></article>
        </div>
      </section>

      <section className="principles" aria-labelledby="principles-title">
        <p className="side-label">03 — What bridges</p>
        <div><h2 id="principles-title">Curiosity makes<br />the crossing possible.</h2><div className="principle-list"><p><b>01</b> Learn before naming</p><p><b>02</b> Notice what endures</p><p><b>03</b> Make room for the unfamiliar</p></div></div>
      </section>

      <section className="notes" id="notes" aria-labelledby="notes-title">
        <p className="eyebrow">Notes from the threshold</p><h2 id="notes-title">An evolving practice<br />of <em>attention.</em></h2>
        <p>Bridging Craft is a place to follow the questions, references, and encounters that gather along the way.</p>
        <a className="text-link" href="#top">Return to the beginning <Arrow /></a>
      </section>
    </main>
    <footer><a className="wordmark" href="#top">Bridging <i>Craft</i></a><p>Learning · looking · in between</p><p>© {new Date().getFullYear()}</p></footer>
  </>
}

createRoot(document.getElementById('root')).render(<App />)
