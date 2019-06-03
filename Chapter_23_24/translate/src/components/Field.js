import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends Component {
  static contextType = LanguageContext;
  render() {
    const text = this.context.language==='english'?'Name':'Naame';
    return (
      <div className="ui field">
        <label htmlFor="">{text}</label>
        <input type="text" />
      </div>
    );
  }

}

export default Field;
