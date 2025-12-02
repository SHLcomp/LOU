import React from 'react'
import Navbar from '../components/navbar/Navbar'
import './styles.scss'
const ErrorPage = () => {
  return (
    <div>
        <Navbar/>
        <section className="error">
            <h1>Sorry, this page is not available :( </h1>
            <h4>It's either a page that has not been created yet, or a wrong path.
                <br />
                Check with your developer and try again! :)
            </h4>
        </section>
    </div>
  )
}

export default ErrorPage