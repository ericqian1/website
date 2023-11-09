
import './App.css';

const eric = {
  name: 'Eric Qian',
  imageUrl: './headshot.jpeg',
  imageSize: 50,
};

const separatorStyle = {
  height: '20px', // Adjust the height to control the separation size
  background: 'linear-gradient(90deg, rgba(64, 224, 208, 0.6), rgba(0, 127, 255, 0.6))', // Linear gradient from transparent turquoise to transparent azure
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Add a soft shadow
  maxWidth: '100%', // Set a maximum width for the block
  margin: '0 auto', // Center the block horizontally    
};


const backgroundStyle = {
  backgroundColor: '#f2f2f2',
  display: 'flex', // Use flexbox
  justifyContent: 'center', // Center align horizontally
  alignItems: 'center', // Center align vertically
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Add box shadow for a modern block feel
  maxWidth: '100%', // Set a maximum width for the block
  margin: '0 auto', // Center the block horizontally    
  paddingTop: '10px', // Add top padding
  paddingBottom: '10px', // Add bottom padding  

};

const bigPadding = {
  backgroundColor: '#f2f2f2',
  display: 'flex', // Use flexbox
  justifyContent: 'center', // Center align horizontally
  alignItems: 'center', // Center align vertically
  maxWidth: '100%', // Set a maximum width for the block
  margin: '0 auto', // Center the block horizontally    
  paddingTop: '100px', // Add top padding
  paddingBottom: '100px', // Add bottom padding  

};

// Define the CSS styles as JavaScript objects
const headerTextStyles = {
  fontFamily: 'Arial, sans-serif',
  fontSize: '24px', // Adjust the font size for the header
  color: '#333',
  lineHeight: '1.5',
  textAlign: 'center',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
};

const bodyTextStyles = {
  fontFamily: 'Arial, sans-serif',
  fontSize: '16px', // Adjust the font size for the body text
  color: '#333',
  lineHeight: '1.5',
  textAlign: 'center',
};

const linkStyles = {
  textDecoration: 'none',
  color: '#0077b6',
};

const linkHoverStyles = {
  color: '#ff5722',
};

const imageStyles = {
  maxWidth: '15%',
  height: 'auto',
  border: '1px solid #ddd',
  boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  display: 'block',
  margin: '5%',
  borderRadius: '20%', // Crop the image into a circle
};

const textContainerStyles = {
  flex: '1', // Take up available space
  textAlign: 'left', // Center align the text
  padding: '10px', // Add some padding for spacing
};

const linkListStyles = {
  textAlign: 'center',
};

const linkList = [
  { text: 'LinkedIn', url: 'https://www.linkedin.com/in/tianzeqian/' },
  { text: 'Github', url: 'https://github.com/ericqian1/' },
  { text: 'Google Scholar', url: 'https://scholar.google.com/citations?user=vF-MEuYAAAAJ&hl=en'},
  { text: 'Recursion', url: 'https://www.ericqian.me'},
];

const differentFontStyles = {
  fontFamily: 'Roboto, sans-serif', // Modern font (you can replace 'Roboto' with the font of your choice)
  fontSize: '16px',
  color: '#555', // A different shade of gray
  lineHeight: '1.5',
  textAlign: 'center',
  margin: '0', // Add margin to start on a new line
  padding: '40px 40px', // Add padding to start on a new line  
  maxWidth: '100%',
  marginTop: '20px', // Add margin at the top to create space  
};

const footerStyle = {
  background: 'linear-gradient(90deg, rgba(64, 224, 208, 0.6), rgba(0, 127, 255, 0.6))', // Linear gradient from transparent turquoise to transparent azure
  padding: '0 0',
  textAlign: 'center',
  position: 'fixed', // Fixed positioning
  bottom: '0', // Align at the bottom
  width: '100%', // Make it span the entire width
};

function App() {
  return (
    <div>
      <div style={separatorStyle}></div>
      <div style={backgroundStyle}>
        <img
          className="avatar"
          src={eric.imageUrl}
          alt={'Photo of ' + eric.name}
          style={imageStyles}
        />
        <div style={textContainerStyles}>
          <h1 style={{ ...headerTextStyles, textAlign: 'left' }}> {eric.name} </h1>
          <h2 style={{ ...bodyTextStyles, textAlign: 'left' }}> Welcome to my portfolio. </h2>
          <h2 style={{ ...bodyTextStyles, textAlign: 'left' }}> Here are my links: </h2>

          <ul>
            {linkList.map((link, index) => (
              <li key={index}>
                <a href={link.url} 
                  style={{ ...linkStyles, ':hover': linkHoverStyles }}>{link.text}</a>
              </li>
            ))}
          </ul>          
          <h2 style={{ ...bodyTextStyles, textAlign: 'left' }}>
            You can reach me at <a href="mailto:tianzeqian@gmail.com" style={linkStyles}>
              tianzeqian@gmail.com
            </a> for professional inquiries
          </h2>
        </div>  
      </div>
      <div style={separatorStyle}></div>
      <div style={backgroundStyle}>
        <div style={textContainerStyles}>
          <h1 style={headerTextStyles}> About Me </h1>   
          <div>
            <p style={differentFontStyles}>
            Hello! I hope you are doing well and find yourself on this website willingly. 
            My name is Eric and I am now a 20-something-year-old data scientist and engineer. 
            I did my undergrad at the University of Texas at Austin where I majored in Petroleum Engineering and Economics.
            From there, I began my career bridging the gap between data analytics and traditional engineering. 
            I codified, functionalized, and implemented several engineering problems as more-modern digital products based in analytics.
            The power of data science in modernizing the energy industry, my curiosity and love for problem solving, and a general thirst to learn more
            spurred me to go deeper in the subject. I began my Master's in Data Science at Georgia Tech and made a career change to a Series-C remote sensing
            startup where I learned a ton about proper software engineering, big data engineering, and algorithms. Today, I have made a return to the energy
            industry to be a leader in digital transformation, analytics, and decarbonization of the energy industry. 
            Outside of work, I have a penchant for music and enjoy practicing the guitar, violin, and piano. I also mess around with producing
            music and making mixes. I also have a deep interest in statistics. I enjoy playing poker and investing in different equities. 
            </p>
          </div>           
        </div> 
      </div>   
      <div style={separatorStyle}></div>            
      <div style={backgroundStyle}>
        <div style={textContainerStyles}>
          <h1 style={headerTextStyles}> Technical Skillsets </h1>   
          <div>
          </div>           
        </div> 
        <div style={textContainerStyles}>
          <h1 style={headerTextStyles}> Work Experience </h1>   
          <div>
          </div>           
        </div>         
      </div>   
      <div style={bigPadding}></div>
      <div style={footerStyle}>
        <p>© 2023 Tianze Qian (Eric Qian)</p>
      </div>            
    </div>



  );
}

export default App;

