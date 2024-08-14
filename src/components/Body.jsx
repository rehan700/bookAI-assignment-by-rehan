import React from 'react'
import '../css/Navbar.css'; // This will contain the CSS styles

export default function Body() {
  return (
    <div>
      <section className="hero">
        <h1 style={{ fontSize: '50px' }}>
          <strong>
            Explore the Possibilities of
            <span className="highlight" style={{
              color: '#8a2be2',
              paddingInlineStart: '7.7px',
              borderBottom: '3px solid #57b6fe'
            }}>
              AI Book Writing</span> <br /> with BookAI
          </strong>

        </h1><br />
        <p className="subtitle" style={{ fontSize: "20px" }}>
          Unleash the power of AI to create captivating books in minutes.<br />
          Download, Distribute wherever you want. Generate unlimited free <br />books
        </p>

        <br />
      </section>
    </div>
  )
}
