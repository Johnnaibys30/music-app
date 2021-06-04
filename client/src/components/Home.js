import React from 'react';
import AddSongs from './AddSong';
import { getAllSongs } from './networkRequests';

class Home extends React.Component {
    state = {
        songs: []
    }
    
    componentDidMount(){
        this.refresh()
       
    }
    refresh = async()=>{
        let songs= await getAllSongs()
        this.setState({songs})
        
    }
    render(){
        return (
            <div>
                <AddSongs refresh={this.refresh}/>
                <ul>
                    {this.state.songs.map(song => <li key={song.id}>{song.title}</li>)}
                </ul>
            </div>
        )
    }
}

export default Home;