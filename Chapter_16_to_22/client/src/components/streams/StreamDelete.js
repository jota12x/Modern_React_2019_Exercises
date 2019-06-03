import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import {connect} from 'react-redux';
import {fetchStream} from '../../actions';
import {deleteStream} from '../../actions';

class StreamDelete extends Component {

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions(){
    const {id}= this.props.match.params;
    const actions=(
      <React.Fragment>
          <button className="ui button negative" onClick={()=>this.props.deleteStream(id)}>Delete</button>
          <Link to="/" className="ui button">Cancel</Link>
      </React.Fragment>
    );
    return actions;
  }

  renderContent(){
    if(!this.props.stream){
      return 'Are you sure you want to delete the stream?';
    }
    return `Are you sure you want to delete the stream with title: ${this.props.stream.title}?`
  }
  render(){

    return (
        <Modal
          title="Delete stream"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={()=>history.push('/')}
        />
    );
  }
}

const mapStateToProps = (state,ownProps)=>{
  return{stream:state.streams[ownProps.match.params.id]};
};

export default connect(mapStateToProps,{fetchStream,deleteStream})(StreamDelete);
