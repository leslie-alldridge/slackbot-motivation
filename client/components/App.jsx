import React from 'react'
import request from 'superagent'

class App extends React.Component {
  constructor(props){
  super(props)

  this.state = {
    satellites: [],
    satData: ''
  }
  this.clicker = this.clicker.bind(this)
}

componentDidMount(){
  request.get('https://api.wheretheiss.at/v1/satellites')
  .then((data) => {
    this.setState({
      satellites: data.body
    })
  })
}

clicker(id) {
  request.get(`https://api.wheretheiss.at/v1/satellites/${id}`)
  .then((data) => {
    console.log(data);
    
    this.setState({
      satData: data.body
    })
  })
}

  render() {
  return (
    <div>
      <h1>React development has begun!</h1>
              {this.state.satellites.length > 0 && <ul> 
                {this.state.satellites.map(sat => {
                return <li key={sat.id}><button onClick={() => this.clicker(sat.id)}>{sat.name}</button></li>
              })}
    </ul>}
    
    {this.state.satData && 
      <div>
        
         {this.state.satData.latitude}
         
         <p>
         {this.state.satData.velocity} - kmph
         </p>
         
      </div>
    }
    
    </div>
    
  )
}
}
export default App

