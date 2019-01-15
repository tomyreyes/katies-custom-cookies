import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Cookies = props => (
  <Layout>
    <Helmet>
      <title>Cookies</title>
      <meta name="description" content="pictures and prices" />
    </Helmet>
    <BannerLanding />
    <div id="main">
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

      <section id="two" className="spotlights">
        <section>
          <Link to="/generic" className="image">
            <img src={pic08} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Orci maecenas</h3>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
                urna. Maecenas massa sed magna lacinia magna pellentesque lorem
                ipsum dolor. Nullam et orci eu lorem consequat tincidunt.
                Vivamus et sagittis tempus.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={pic09} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Rhoncus magna</h3>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
                urna. Maecenas massa sed magna lacinia magna pellentesque lorem
                ipsum dolor. Nullam et orci eu lorem consequat tincidunt.
                Vivamus et sagittis tempus.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={pic10} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Sed nunc ligula</h3>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
                urna. Maecenas massa sed magna lacinia magna pellentesque lorem
                ipsum dolor. Nullam et orci eu lorem consequat tincidunt.
                Vivamus et sagittis tempus.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default Cookies
