import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import CookieBanner from '../components/CookieBanner'
import holidays from '../assets/images/holidays.jpg'
import justbecause from '../assets/images/justbecause.jpg'
import specialevent from '../assets/images/specialevent.jpg'

const Cookies = props => (
  <Layout>
    <Helmet>
      <title>Coookies</title>
      <meta name="description" content="pictures and prices" />
    </Helmet>
    <CookieBanner />
    <div id="main">
      <section id="two" className="spotlights">
        <section>
          <a href="https://www.instagram.com/p/BamlZC2lX-J/" className="image">
            <img src={specialevent} alt="special-event" />
          </a>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Special Events</h3>
              </header>
              <p>
                I create cookies for special events including weddings, baby
                showers and anniversaries.
              </p>
            </div>
          </div>
        </section>
        <section>
          <a href="https://www.instagram.com/p/BrwLmYDgRNb/" className="image">
            <img src={holidays} alt="Holiday Picture" />
          </a>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Holidays</h3>
              </header>
              <p>
                Whether you enjoy snow men or scary creatures on your cookies, I
                have got you covered. Order some cookies for the holiday season!
              </p>
            </div>
          </div>
        </section>
        <section>
          <a href="https://www.instagram.com/p/BmpPikShVoo/" className="image">
            <img src={justbecause} alt="Cookie" />
          </a>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Just Because</h3>
              </header>
              <p>
                Let's be honest. You don't need a special reason to have
                cookies. View the latest cookies I have designed on my
                Instagram.
              </p>
              <ul className="actions">
                <li>
                  <a
                    className="button"
                    href="https://www.instagram.com/katiescustomcookies/"
                  >
                    View Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Prices</h2>
          </header>
          <div className="table-wrapper">
            <table className="alt">
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Basic</th>
                  <th>Detailed</th>
                  <th>Elaborate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2"</td>
                  <td>$1.00</td>
                  <td>$1.50</td>
                  <td>$2.00</td>
                </tr>
                <tr>
                  <td>3"</td>
                  <td>$1.50</td>
                  <td>$2.00</td>
                  <td>$2.50</td>
                </tr>
                <tr>
                  <td>4"</td>
                  <td>$2.00</td>
                  <td>$2.50</td>
                  <td>$3.00</td>
                </tr>
                <tr>
                  <td>5"</td>
                  <td>$2.50</td>
                  <td>$3.00</td>
                  <td>$3.50</td>
                </tr>
                <tr>
                  <td>5"</td>
                  <td>$3.00</td>
                  <td>$3.50</td>
                  <td>$4.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            Basic: three or less colours, two layers of icing and minimal
            details (three steps or less)
          </div>
          <div>
            Detailed: three to five colours, three to five layers of icing and
            moderate details (five steps or less)
          </div>
          <div>
            Elaborate: five plus colors, five plus layers of icing and advanced
            details (five steps or more)
            <div />
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default Cookies
