import React, { FC } from 'react'
import './Layout.css'

const Layout: FC = ({ children }) => {
  return (
  <main className="main">
    <h1 className="main__title">Weather
        <br/><span className="main__title-word main__title-word_last">forecast</span>
	</h1>
	<div className="main__content">{children}</div>
    <p className="main__signature">СДЕЛАНО С ЛЮБОВЬЮ К ПРЕКРАСНОМУ</p>
  </main>
  )
}

export default Layout
