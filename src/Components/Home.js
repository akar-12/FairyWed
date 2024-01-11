import React from 'react';
import cardImage1 from '../Images/Second.jpg';
import cardImage2 from '../Images/fourth.jpg';
import cardImage3 from '../Images/first.jpg';
import cardImage4 from '../Images/fifth.jpg';
import logo from '../Images/logo.jpg'; 

const Home = () => {
  const cardStyle = {
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    width: '25%',
    margin: '0 10px', 
    '&:hover': {
      boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
    },
  };
  const contentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  };

  return (
    <div>
      <div className="Section_top">
      <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto', position: 'absolute', top: '20px', left: '20px' }} />
      <br></br>
        <nav className="custom-nav">
          <ul className="custom-list">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>  
          </ul>
        </nav>
        <div style={contentStyle}>
          <h1 className="custom-heading">FAIRYWED</h1>
          <a href="/login" className="custom-link">Explore</a>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}></div>
      
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <hr style={{ width: '40%',  borderTop: '5px solid #ca428d' }} />
        <span style={{ margin: '0 10px', fontFamily: 'Sofia, sans-serif', fontSize: '25px' }}><b>Trending Properties</b></span>
        <hr style={{ width: '40%', borderTop: '5px solid #ca428d' }} />
      </div>
<br></br>

      
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '30px',
        }}
      >
        {/* First Card */}
        <div style={cardStyle}>
          <img src={cardImage1} alt="Avatar" style={{ width: '100%' }} />
          <div style={{ padding: '2px 16px', textAlign: 'center' }}>
          <h4 style={{ fontFamily: ' Open Sans' }}>
            <b>Varkala</b>
            </h4>
            <p style={{ fontFamily: ' Open Sans' }}>A cliffside beach destination offering stunning coastal views and a relaxed atmosphere,
               perfect for a beachside wedding celebration.</p>
          </div>
        </div>

        {/* Second Card */}
        <div style={cardStyle}>
          <img src={cardImage2} alt="Avatar" style={{ width: '100%' }} />
          <div style={{ padding: '2px 16px', textAlign: 'center' }}>
          <h4 style={{ fontFamily: ' Open Sans' }}>
              <b>Fort kochi</b>
            </h4>
            <p style={{ fontFamily: ' Open Sans' }}>With its colonial architecture, historic monuments, and beautiful beaches</p>
          </div>
        </div>

        {/* Third Card */}
        <div style={cardStyle}>
          <img src={cardImage3} alt="Avatar" style={{ width: '100%' }} />
          <div style={{ padding: '2px 16px', textAlign: 'center' }}>
          <h4 style={{ fontFamily: ' Open Sans' }}>
              <b>Alappuzha</b>
            </h4>
            <p style={{ fontFamily: ' Open Sans' }}>Known for its serene backwaters, Alleppey offers picturesque houseboat weddings
               amidst the tranquil backwaters and lush greenery.</p>
          </div>
        </div>

        {/* Fourth Card */}
        <div style={cardStyle}>
          <img src={cardImage4} alt="Avatar" style={{ width: '100%' }} />
          <div style={{ padding: '2px 16px', textAlign: 'center' }}>
          <h4 style={{ fontFamily: ' Open Sans' }}>
              <b>kovalam</b>
            </h4>
            <p style={{ fontFamily: ' Open Sans' }}>Famous for its pristine beaches and stunning sunset views, 
              Kovalam offers a scenic backdrop for beach weddings.</p>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Home;
