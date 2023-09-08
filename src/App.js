
import { ToastContainer, toast } from 'react-toastify';
import { Component } from "react";
import PokemonForm from "./PokemonForm/PokemonForm";
import "./App.css";
import PokemonInfo from './PokemonInfo.js/PokemonInfo';

export default class App extends Component {
  state = {
    pokemonName: "",
  };

  handleFormSubmit = (pokemonName) => {
    this.setState({ pokemonName });
  };
  render() {
    return (
      <div style={{ maxwidth: 1170, margin: "0 auto", padding: 20 }}>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName}/>
        <ToastContainer autoClose={3000}/>
      </div>
    );
  }
}

// export default class App extends Component {
//   state = {
//     pokemon: null,
//     loading:false,
//   };

//   componentDidMount() {
//     this.setState({loading:true});

//     setTimeout(() => {
//       fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//         .then((res) => res.json())
//         .then((pokemon) => {
//           this.setState({ pokemon });
//           console.log('in then');
//         })
//        .finally(()=>this.setState({loading:false}));
//     }, 3000);
//   }
//   render() {
//     return (
//       <div style={{ maxwidth: 1170, margin: "0 auto", padding: 20 }}>
//         {this.state.loading && <h1>Loading...</h1>}
//         {this.state.pokemon && <div>{this.state.pokemon.name}</div>}
//         {/* <ToastContainer autoClose={3000} /> */}
//       </div>
//     );
//   }
// }
