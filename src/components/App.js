import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish'

class App extends React.Component{
    state = {
        fishes: {},
        order: {}
    }

    addFish = fish => {
        // take a copy of existing state
        const fishes = {...this.state.fishes}
        // add new fish from AddFishForm
        fishes[`fish${Date.now()}`] = fish
        // push updated fishes object to state
        this.setState({ fishes })
    }

    loadSampleFishes = () => {
        // const oldFishes = {...this.state.fishes}
        this.setState({
            // fishes: {...this.state.fishes, sampleFishes}
            fishes: sampleFishes
        })
    }

    addToOrder = key => {
        // 1. load existing state
        const order = {...this.state.order}
        // 2. either add new order or increment the number
        order[key] = order[key] + 1 || 1
        // 3. push to state
        this.setState({ order })
    }

    render() {
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fishermen's Favorite" rank={1} best={true}/>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => (
                            <Fish 
                                key={key}
                                index={key}
                                fishDetails={this.state.fishes[key]} 
                                addToOrder={this.addToOrder}
                            />
                        ))}
                    </ul>
                </div>
                <Order order={this.state.order} fishes={this.state.fishes} />
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
            </div>
        )
    }
}

export default App;