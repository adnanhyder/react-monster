import React, {Component} from 'react';
import {CardList} from './components/card/card-list-components';
import {SearchBox} from './components/search/searchbox';
import './App.css';



class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchString: "",
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(user => this.setState({monsters: user}));
    }

    handleMing = (e) => {
        this.setState({searchString: e.target.value})
    }

    render() {
        const { monsters,searchString}= this.state;
        const filteredMonster = monsters.filter(
            monster => monster.name.toLowerCase().includes(searchString.toLowerCase())
        );
        return (
            <div className="App">
                <h1>Thanks Adnan</h1>
                <SearchBox
                    placeholder={"Search Now"}
                    chaing={this.handleMing} />

                <CardList monsters={filteredMonster}></CardList>
            </div>
        );
    }
}

export default App;
