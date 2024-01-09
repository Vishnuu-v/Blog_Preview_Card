import React from 'react'
import "./App.css"
import CardImage from "./assets/illustration-article.svg"
import Author from "./assets/image-avatar.jpg"
const App = () => {
  return (
    <div className='container'>
      <article className='card'>
        <img src={CardImage} alt="" className='card-img' />
        <section className="card-info">
          <h2>Learning</h2>
          <p>Published 21 Dec 2023</p>
          <h1>HTML & CSS foundations</h1>
          <p>These languages are the backbone of every website, defining structure, content, and presentation.</p>
          <section className="author">
            <img src={Author} alt="" className='author-img' />
            <h2>Greg Hooper</h2>
          </section>
        </section>
      </article>
    </div>
  )
}

export default App