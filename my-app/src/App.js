import React from 'react';
import './App.css';
import {
  separatorStyle,
  backgroundStyle,
  bigPadding,
  footerStyle,
  eric,
  headerTextStyles,
  bodyTextStyles,
  linkStyles,
  linkHoverStyles,
  linkList,
  differentFontStyles,
  imageStyles,
  textContainerStyles,
  listStyles,
  listItemStyles,
  listDescriptionStyles
} from './Styles';

import {
  aboutMeContent,
  skillsetList,
  experienceList

} from './TextElements.js'

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
                <a href={link.url} style={{ ...linkStyles, ':hover': linkHoverStyles }}>{link.text}</a>
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
              {aboutMeContent}
            </p>
          </div>
        </div>
      </div>
      <div style={separatorStyle}></div>
        <div style={backgroundStyle}>
          <div style={textContainerStyles}>
            <h1 style={headerTextStyles}> Technical Skillsets </h1>
              <ul style={listStyles}>
                {skillsetList.map((skillset, index) => (
                  <li key={index} style={listItemStyles}>
                    <h2>{skillset.header}</h2>
                    <ul style={listStyles}>
                      {skillset.items.map((item, itemIndex) => (
                        <li key={itemIndex} style={listItemStyles}>
                          {item.name}
                          <p style={listDescriptionStyles}>{item.description}</p>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
          </div>
        <div style={textContainerStyles}>
          <h1 style={headerTextStyles}> Work & Education </h1>
          <div>
              <ul style={listStyles}>
                {experienceList.map((skillset, index) => (
                  <li key={index} style={listItemStyles}>
                    <h2>{skillset.header}</h2>
                    <ul style={listStyles}>
                      {skillset.items.map((item, itemIndex) => (
                        <li key={itemIndex} style={listItemStyles}>
                          {item.name}
                          <p style={listDescriptionStyles}>{item.description}</p>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>          
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
