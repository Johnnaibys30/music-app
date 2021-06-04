import React from 'react';
import { addSong } from './networkRequests';

class AddSong extends React.Component {
    state = {
       song_name: "",
       artist: "",
       duration: "",
       
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onClick = async () => {
        await addSong(this.state);
        this.props.refresh()
    }

    render(){
        return(
            <div className="add-song-wrap">
                <h1>Add Song</h1>
                <label>title: </label>
                <input onChange={this.handleChange} name="title"></input>
                <label>Artist: </label>
                <input onChange={this.handleChange} name="artist"></input>
                <label>Duration: </label>
                <input onChange={this.handleChange} name="duration"></input>
                <button onClick={this.onClick}>Submit</button>
            </div>
        )
    }
}

export default AddSong; 