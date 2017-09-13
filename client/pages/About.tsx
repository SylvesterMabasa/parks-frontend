import React from 'react';

export default class About extends React.Component<any, any>{
  
        constructor(props: any) {
          super(props);
          this.state = {name: '', location:'', entryFee:'', services:''};
      
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
      
        handleChange(event:any) {
          this.setState({[event.target.name]: event.target.value});
        }
      
        handleSubmit(event:any) {
        //   alert('A name was submitted: ' + this.state.surname);

          fetch('http://localhost:3000/parks', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin':'',
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: this.state.name,
              location: this.state.location,
              entryFee: this.state.entryFee,
              services: this.state.services
            })
          })






          event.preventDefault();
        }
      
        render() {
          return (
              
            <form onSubmit={this.handleSubmit}>
                <div>Post data to localhost api</div>
              <label>
                Name:
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
              </label>
              <label>
                location:
                <input type="text" name="location" value={this.state.location} onChange={this.handleChange} />
              </label>
              <label>
                entry fee:
                <input type="text" name="entryFee" value={this.state.entryFee} onChange={this.handleChange} />
              </label>
              <label>
                services:
                <input type="text" name="services" value={this.state.services} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
          );
        }
     
}