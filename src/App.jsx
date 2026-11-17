import { useEffect, useState } from 'react'

const GITHUB_USERNAME = 'octocat' // Replace with your GitHub username before presenting.

const skills = ['React', 'JavaScript', 'CSS', 'Accessibility', 'Design systems', 'REST APIs']

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>
}

function App() {
  const [repos, setRepos] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const controller = new AbortController()
    async function loadRepos() {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`, { signal: controller.signal })
        if (!response.ok) throw new Error(`GitHub returned ${response.status}`)
        const data = await response.json()
        setRepos(data.filter((repo) => !repo.fork).slice(0, 3))
        setStatus('success')
      } catch (error) {
        if (error.name !== 'AbortError') setStatus('error')
      }
    }
    loadRepos()
    return () => controller.abort()
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Alex Morgan, home"><span className="mark">AM</span><span>Alex Morgan<span className="wordmark-dot">.</span></span></a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a><a href="#about">About</a><a className="nav-contact" href="mailto:hello@example.com">Let’s talk <Arrow diagonal /></a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES <span className="eyebrow-place">· BASED IN BROOKLYN, NY</span></p>
            <h1 id="hero-title">I make the web<br />feel a little more <span className="serif-accent">human.</span></h1>
            <p className="hero-description">Hey, I’m Alex — a frontend developer turning thoughtful design into fast, accessible experiences people love to use.</p>
            <div className="hero-actions"><a className="button button-dark" href="#work">Explore my work <Arrow /></a><a className="text-link" href="mailto:hello@example.com">Get in touch <Arrow diagonal /></a></div>
          </div>
          <div className="hero-art" aria-label="Abstract orange and lilac geometric artwork" role="img">
            <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-sun" /><div className="art-caption">CURIOUS BY NATURE<br />BUILT WITH INTENTION</div><span className="art-star">✳</span>
          </div>
          <div className="hero-meta"><span>SCROLL TO EXPLORE</span><span className="meta-line" /><span>01 / 04</span></div>
        </section>

        <section className="work-section section-shell" id="work" aria-labelledby="work-title">
          <div className="section-heading"><div><p className="eyebrow">SELECTED WORK <span className="heading-index">/ 01</span></p><h2 id="work-title">A few things<br className="mobile-break" /> I’ve <span className="serif-accent">made.</span></h2></div><p className="section-intro">A mix of shipped products, experiments, and ideas brought to life. More is always in the works.</p></div>
          <div className="project-grid" aria-live="polite" aria-busy={status === 'loading'}>
            {status === 'loading' && <p className="api-message">Finding the latest projects…</p>}
            {status === 'error' && <p className="api-message">Projects couldn’t load right now. You can still browse my work on <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a>.</p>}
            {status === 'success' && repos.length === 0 && <p className="api-message">No public projects yet. Check back soon.</p>}
            {status === 'success' && repos.map((repo, index) => (
              <article className={`project-card project-card-${index + 1}`} key={repo.id}>
                <div className="project-visual"><span className="project-number">0{index + 1}</span><span className="project-visual-mark">{['✳', '◒', '✦'][index % 3]}</span><span className="project-language">{repo.language || 'OPEN SOURCE'}</span></div>
                <div className="project-info"><div><h3>{repo.name.replaceAll('-', ' ')}</h3><p>{repo.description || 'A project built with care and curiosity.'}</p></div><a className="icon-link" href={repo.html_url} target="_blank" rel="noreferrer" aria-label={`View ${repo.name} on GitHub`}><Arrow diagonal /></a></div>
              </article>
            ))}
          </div>
          <a className="all-work" href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`} target="_blank" rel="noreferrer">Explore all projects on GitHub <Arrow diagonal /></a>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="about-inner section-shell"><div className="about-label"><p className="eyebrow">A LITTLE ABOUT ME <span className="heading-index">/ 02</span></p><div className="about-stamp">DESIGN<br />×<br />CODE</div></div><div className="about-copy"><h2 id="about-title">Good work starts<br />with <span className="serif-accent">good questions.</span></h2><p>I’m a developer who cares as much about how something works as how it feels. I like getting close to the problem, collaborating early, and sweating the small details that make an experience click.</p><div className="skill-list" aria-label="Skills">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div></div>
        </section>

        <section className="contact-section section-shell" aria-labelledby="contact-title"><p className="eyebrow">HAVE A GOOD ONE IN MIND? <span className="heading-index">/ 03</span></p><div className="contact-row"><h2 id="contact-title">Let’s make<br /><span className="serif-accent">something matter.</span></h2><a className="contact-button" href="mailto:hello@example.com" aria-label="Email Alex Morgan">↗</a></div><a className="contact-email" href="mailto:hello@example.com">hello@example.com <Arrow diagonal /></a></section>
      </main>
      <footer className="site-footer"><a className="wordmark" href="#top"><span className="mark">AM</span><span>Alex Morgan<span className="wordmark-dot">.</span></span></a><span>DESIGNED & BUILT WITH CARE · 2026</span><a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noreferrer">GITHUB <Arrow diagonal /></a></footer>
    </>
  )
}

export default App
