import React, { Component } from 'react';
import axios from 'axios'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class EditShow extends Component {
    constructor(props) {
        super(props)

        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangeVenue = this.onChangeVenue.bind(this)
        this.onChangeBand = this.onChangeBand.bind(this)
        this.onChangeDuration = this.onChangeDuration.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            venue: '',
            band: '',
            duration: 0,
            date: new Date(),
            users: []
        }
        
    }

    componentDidMount() {
        axios.get('http://localhost:5000/shows/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    username: response.data.username,
                    venue: response.data.venue,
                    band: response.data.band,
                    duration: response.data.duration,
                    date: new Date(response.data.date)
                })
            })
            .catch(function (error) {
                console.log(error)
            })

       axios.get('http://localhost:5000/users/')
        .then(response => {
            if (response.data.length > 0) {
                this.setState({
                    users: response.data.map(user => user.username),
                })
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }
    onChangeVenue(e) {
        this.setState({
            venue: e.target.value
        })
    }
    onChangeBand(e) {
        this.setState({
            band: e.target.value
        })
    }
    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        })
    }
    onChangeDate(date) {
        this.setState({
            date: date
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const show = {
            username: this.state.username,
            venue: this.state.venue,
            band: this.state.band,
            duration: this.state.duration,
            date: this.state.date
        }
        console.log(show)
        axios.post('http://localhost:5000/shows/update/'+this.props.match.params.id, show)
            .then(res => console.log(res.data))
        window.location = '/'

    }

    render() {
        return(
            <div>
                <h1>EDIT SHOW</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select ref="userInput"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}>
                            {
                                this.state.users.map(function(user) {
                                    return <option
                                    key={user}
                                    value={user}>{user}
                                    </option>
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Venue: </label>
                        <input  type="text"
                        required
                        className="form-control"
                        value={this.state.venue}
                        onChange={this.onChangeVenue}
                            
                        />
                    </div>
                    <div className="form-group">
                        <label>Band: </label>
                        <input  type="text"
                        required
                        className="form-control"
                        value={this.state.band}
                        onChange={this.onChangeBand}
                            
                        />
                    </div>
                    <div className="form-group">
                        <label>Duration: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.duration}
                        onChange={this.onChangeDuration}
                            
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Edit Show" className=" btn btn-primary" />
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default EditShow