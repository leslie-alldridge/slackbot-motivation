import React from 'react';
import { connect } from 'react-redux';
import { submitForm } from '../actions/form';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secretinput: '',
      formInput: '',
      lock: process.env.LOCK
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state.formInput);
  }

  render() {
    return (
      <div>
        <h1>My job is to give you motivation!!!</h1>
        <input name="secretinput" onChange={this.handleChange} type="text" />
        {this.state.secretinput == process.env.LOCK && (
          <form onSubmit={this.handleSubmit}>
            <input
              name="formInput"
              onChange={this.handleChange}
              placeholder="general quote"
            />
            <button type="submit" value="submit">
              Submit
            </button>
          </form>
        )}
        {this.props.state.form && <p>{this.props.state.form.outcome}</p>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitForm: form => {
      dispatch(submitForm(form));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
