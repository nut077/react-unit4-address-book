import React, {Component} from 'react';
class Form extends Component {
  state = {
    name: '',
    address: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    const {name, address} = this.state;
    this.props.onSubmit({
      name, address
    });
    this.clearForm();
  };

  clearForm() {
    this.setState({name: '', address: ''})
  }

  changeState = (state) => (
    (e) => this.setState({[state]: e.target.value})
  );

  render() {
    const {name, address} = this.state;
    return (
      <div>
        <br/>
        <h3>Address form</h3>
        <form>
          <div classID="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" value={name} onChange={this.changeState('name')}/>
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" className="form-control" id="address" value={address}
                   onChange={this.changeState('address')}/>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Create</button>
        </form>
      </div>
    )
  }
}
export default Form;