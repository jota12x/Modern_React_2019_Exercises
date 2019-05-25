import React, { Component } from 'react';
import {connect} from 'react-redux';
class  UserHeader extends Component {
  render() {
    if(!this.props.user){
      return <p>Loading</p>
    }
    return (
      <div className="header">
        {this.props.user.name}
      </div>
    );
  }

}

const mapStateToProps=(state,ownProps)=>{
  const user = state.users.find((user)=>user.id===ownProps.userId);
  return {
    user
  }
};

export default connect(mapStateToProps)(UserHeader);
