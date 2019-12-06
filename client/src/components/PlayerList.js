import React from 'react'
import axios from 'axios'
import PlayerCard from './PlayerCard'

class WomenList extends React.Component {
   constructor(){
       super()
       this.state = {
           
       }
   }
    

    componentDidMount(){
        axios.get('http://localhost:5000/api/players')
        .then(response => {
            console.log(response)
            this.setState({
                data: response.data
            })

        })
        .catch(error => {
            console.log('Error in server', error)
        })
    }

    render(){
        return (
            <div>
                <h2>List of Players</h2>
               {this.state.data && this.state.data.map(player => (
                   <PlayerCard player ={player}/> 
               ))}
            </div>
        )
    }

}


export default WomenList