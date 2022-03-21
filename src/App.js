import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/Card-List-Component";
import SearchBox from "./components/search-box/Search-Box-Component";
class App extends Component {
  constructor() {
    super(); // it use with extented class

    this.state = {
      monisters: [],
      searchBox: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monisters: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchBox = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchBox };
    });
  };

  render() {
    const { monisters, searchBox } = this.state;
    const { onSearchChange } = this;

    const filterMonisters = monisters.filter((monsiter) => {
      return monsiter.name.toLocaleLowerCase().includes(searchBox);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monisters Roldex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search monisters"
          className="monisters-search-box"
        />

        <CardList monisters={filterMonisters} />
      </div>
    );
  }
}

export default App;

/*
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <h1>
              {" "}
              HI {this.state.name.FirstName} {this.state.name.LastName}
            </h1>
            <h1> Age {this.state.age}</h1>
          </p>

          <button
            onClick={() => {
              this.setState(
                // advanced syntacs
                // setstate(()=>{}, ()=>{})

                () => {
                  return {
                    name: { FirstName: "Eman", LastName: "Yaseen" },
                    age: 50,
                  };
                },
                () => {
                  console.log(this.state);
                }
              );
            }}
            //basic syntacs
            // this.setState({
            //   name: { FirstName: "Eman", LastName: "Yaseen" },
            // });
            // this.setState({ age: 50 });
            // console.log(this.state);
          >
            Change Name and age{" "}
          </button>
        </header>
        */
