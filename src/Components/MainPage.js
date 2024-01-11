import React from 'react';
import './MainPage.css'; // Import the CSS file for styling
import image1 from '../Images/beach.jpg';
import image2 from '../Images/backwater.jpg';
import image3 from '../Images/resort1.jpg';
import image4 from '../Images/Hill.jpg';
import image5 from '../Images/nature1.jpg';
import logo from '../Images/logo.jpg';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div style={{ marginTop: '10px' }}>
      <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto', position: 'absolute', top: '20px', left: '20px' }} />
      <div style={{ height: '40px' }}></div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <hr style={{ width: '35%', borderTop: '5px solid #ca428d' }} />
        <span style={{ margin: '0 10px', fontFamily: 'Sofia, sans-serif', fontSize: '25px' }}><b>Pick From Top Category</b></span>
        <hr style={{ width: '35%', borderTop: '5px solid #ca428d' }} />
      </div>
      <div style={{ marginTop: '30px' }}/>

      <div className="card-container">
      <Link to="/beachfront" className="nav-link">
          <div className="card">
            <div className="container">
              <img
                src={image1}
                alt="Beachfront"
                className="image"
                style={{ width: '100%' }}
              />
              <div className="middle">
                <div className="text">
                  Kerala's beachfront locations cater to diverse wedding preferences.
                  Whether it's a serene ceremony by the sea or a lavish beachfront reception.
                </div>
              </div>
            </div>
            <div className="main">
              <p>Beachfront</p>
            </div>
          </div>
        </Link>
       
        <Link to="/backwaters" className="nav-link">
          <div className="card">
            <div className="container">
              <img
                src={image2}
                alt="Backwaters"
                className="image"
                style={{ width: '100%' }}
              />
              <div className="middle">
                <div className="text">
                  A destination wedding in the backwaters unveils a tapestry of serenity,
                  where the gentle lapping of waters forms a symphony for your special day.
                </div>
              </div>
            </div>
            <div className="main">
              <p>Backwaters</p>
            </div>
          </div>
        </Link>

        <Link to="/resort" className="nav-link">
          <div className="card">
            <div className="container">
              <img
                src={image3}
                alt="Resort"
                className="image"
                style={{ width: '100%' }}
              />
              <div className="middle">
                <div className="text">
                  Nestled amidst breathtaking landscapes and adorned with sophisticated elegance, this resort offers a perfect haven for your special day.
                </div>
              </div>
            </div>
            <div className="main">
              <p>Resort</p>
            </div>
          </div>
        </Link>

        <div className="card hill-range" > 
          <Link to="/hill-range"className="nav-link">
            <div className="container">
              <img
                src={image4}
                alt="Hill Range"
                className="image"
                style={{ width: '100%' }}
              />
              <div className="middle">
                <div className="text">
                  Explore the picturesque hill ranges, a perfect backdrop for your dream wedding amidst nature's beauty.
                </div>
              </div>
            </div>
            <div className="main">
              <p>Hill Range</p>
            </div>
          </Link>
        </div>

        <div className="card nature"> 
          <Link to="/nature"className="nav-link">
            <div className="container">
              <img
                src={image5}
                alt="Nature"
                className="image"
                style={{ width: '100%' }}
              />
              <div className="middle">
                <div className="text">
                  Immerse yourself in the serenity of nature's embrace for your dream destination wedding
                </div>
              </div>
            </div>
            <div className="main">
              <p>Nature</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
