import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserInfo from '../components/UserInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createChart } from 'lightweight-charts';
import Dashboard_tabs from '../components/dashboard_tabs'
import TradingViewWidget from '../components/ChartWidget.js'
import ImageUploadForm from '../components/ImageUploadForm.js'
import { useAuth } from '../components/AuthContext';


function Dashboard() {
  const { authenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
      if (!authenticated) {
          navigate('/login');
      } 
  }, [authenticated, navigate]);

    return (
        <>
        <section className="dashboard_sec">
        <Container fluid>
          {/* <Row className="search_row">
          
            <Col sm={12} md={4} lg={3} >
              <h2>
                AUD/USD
                <span>price</span>
              </h2>
              <ul className="d-flex stats_lst list-unstyled">
                <li>0.64</li>
                <li className="blue">
                  <i className="fa-solid fa-caret-up"></i>0.48%
                </li>
                <li className="blue">
                  <i className="fa-solid fa-caret-up"></i>0.00pts
                </li>
              </ul>
            </Col>
            <Col sm={12} md={8} lg={9} className=" justify-content-end">
              <form action="/search" method="get" className="search_form">
                <input
                  type="text"
                  id="searchQuery"
                  name="q"
                  placeholder="Search for other instruments"
                  required
                />
                <button type="submit">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </Col>
          </Row> */}
  
          <Row className="chart_row">
            <Col lg={12} >
              <hr />
              {/* <img src="assets/images/chart.png" alt="" /> */}
              {/* <div id="chartContainer"></div> */}
              <TradingViewWidget />
            </Col>
          </Row>
  
          {/* <Row className=" box_row">
            <Col sm={4} lg={2} >
              <div className="box light_box text-center">
                <span className="d-block">
                  Sell
                  <h6>0.637</h6>
                </span>
              </div>
            </Col>
            <Col sm={4} lg={2}>
              <div className="box light_box text-center">
                <span className="d-block">
                  Buy
                  <h6>0.637</h6>
                </span>
              </div>
            </Col>
            <Col sm={4} lg={2}>
              <div className="box dark_box">
                <span className="d-block">
                  1 Hour
                  <h6>
                    <i className="fa-solid fa-caret-up"></i>0.39%
                  </h6>
                </span>
              </div>
            </Col>
            <Col sm={4} lg={2}>
              <div className="box dark_box">
                <span className="d-block">
                  Day
                  <h6>
                    <i className="fa-solid fa-caret-up"></i>0.39%
                  </h6>
                </span>
              </div>
            </Col>
            <Col sm={4} lg={2}>
              <div className="box dark_box">
                <span className="d-block">
                  7 Day
                  <h6>
                    <i className="fa-solid fa-caret-up"></i>0.39%
                  </h6>
                </span>
              </div>
            </Col>
            <Col sm={4} lg={2}>
              <div className="box dark_box down">
                <span className="d-block">
                  30 Day
                  <h6>
                    <i className="fa-solid fa-caret-down"></i>0.39%
                  </h6>
                </span>
              </div>
            </Col>
          </Row>
   */}
          {/* <Row className=" blue_row">
            <Col sm={12} lg={4} >
              <p>70% of clients are long on this asset</p>
            </Col>
            <Col sm={12} lg={4} >
              <div className="range">
                <div className="progress">
                <div className="progress-done" data-done="43" ></div>
                <span>43%</span>
  
                </div>
                <p>Pricing is indicative only. Log in to see latest market data</p>
              </div>
            </Col>
            <Col sm={12} lg={4} className="text-center">
              <button className="btn_blue">Start Trading</button>
            </Col>
          </Row> */}
  
          <Row className="chat_row">
            <Col  lg={12}>
            <Dashboard_tabs/>
            </Col>
          </Row>

          <Row>
            {/* <ImageUploadForm /> */}
          </Row>
        </Container>

        
      </section>
      <style>
        {`
          footer#theme-footer {
            display: none;
        }
        `}
      </style>
      </>
    );
}


export default Dashboard;