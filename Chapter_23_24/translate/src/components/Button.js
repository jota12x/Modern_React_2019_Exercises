import React, { Component } from 'react';
import ColorContext from '../contexts/ColorContext';
import LanguageContext from '../contexts/LanguageContext';

class Button extends Component {

  static contextType = LanguageContext;

  render() {
    return (
      <ColorContext.Consumer>
        {
          (color)=>
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {(value)=> value.language==='english'?'Submit':'Voorlegen'}
            </LanguageContext.Consumer>
          </button>
        }

      </ColorContext.Consumer>
    );
  }

}

export default Button;
