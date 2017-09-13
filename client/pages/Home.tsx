import React from 'react';


export default class Home extends React.Component<any, any>{



    constructor(props?: any) {
        super(props);
        this.state = {};
       
    }
 
    public parksUrl = `https://api.github.com/users/SylvesterMabasa`;
 
    componentDidMount() {
        
        fetch(this.parksUrl) 
            .then(d => d.json())
            .then(d => {
                this.setState({
                    data: d
                })
            })
    }
    
    render() { 
        
     if(!this.state.data) return <p>loading...</p>
    
        return(
            <div>
                <div>Items:</div>
                <h3>Username: { this.state.data.login} </h3>  
                <ul>
                    <li>Url: { this.state.data.url}</li>
                    <li>Public Repos: { this.state.data.public_repos}</li>
                    <li>followers: { this.state.data.followers}</li>
                    <li>Last updated on: { this.state.data.updated_at}</li>
                    
                    
                    </ul>       
            </div>  
        );
    }
}