import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RestaurantsList from './RestaurantList'
import BarsList from './BarList'


class App extends Component {

    constructor(){
        super()

        this.state = {
            restaurant: false,
            bar: false,
            both: false,
        }

        this.toggleBar = this.toggleBar.bind(this)

        this.toggleRestaurant = this.toggleRestaurant.bind(this)

        this.toggleBoth = this.toggleBoth.bind(this)
    }

    toggleBar = () => {
        console.log("toggleBar was run");
        const bar = this.bar;
        this.setState({
            bar: !bar
        })
    }

    toggleRestaurant = () => {
        console.log("toggleRestaurant was run");
        const restaurant = this.restaurant;
        this.setState({
            restaurant: !restaurant
        })
    }

    toggleBoth = () => {
        console.log("toggleBoth was run");
        const both = this.both;
        this.setState({
            both: !both
        })
    }
    render() {
        return (
            <div className="App">
                <div className="hero">
                    <h1 className="prompt">What are you looking for?</h1>
                    <div className="prompt-container">
                        <div className="option-pannel">
                            <button onClick={this.toggleBar} className="options">Bar</button>
                            <button onClick={this.toggleBoth} className="options">Both</button>
                            <button onClick={this.toggleRestaurant} className="options">Restaurant</button>
                        </div>
                    </div>
                </div>
                {this.state.restaurant && <RestaurantsList/>}
                {this.state.bar && <BarsList/>}
            </div>
        );
    }
}

export default App;
