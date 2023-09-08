import { Component } from "react";
import PokemonDataView from "../PokemonDataView/PokemonDataView";
import PokemonErrorView from "../PokemonErrorView/PokemonErrorView";
import PokemonPendingView from "../PokemonPendingView/PokemonPendingView";
import pokemonApi from '../Api/Api'

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: "idle",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      this.setState({ status:'pending' });

      pokemonApi
      .fetchPokemon(this.props.pokemonName)
    //   fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
    //     .then((response) => {
    //       if (response.ok) {
    //         return response.json();
    //       }

    //       return Promise.reject(
    //         new Error(
    //           `Fail there is no pokemon with ${this.props.pokemonName} name`
    //         )
    //       );
    //     })
        .then((pokemon) => this.setState({ pokemon,status:'resolved' }))
        .catch((error) => this.setState({ error,status:'rejected' }))
    
    }
  }
  render() {
    const { pokemon, error, status } = this.state;
 

    if (status === "idle") {
      return <div>Enter pokemon name</div>;
    }

    if (status === "pending") {
      return <PokemonPendingView pokemonName={this.props.pokemonName}/>;
    }

    if (status === "rejected") {
      return <PokemonErrorView message={error.message}/>
    }

    if (status === "resolved") {
      return (
        <PokemonDataView pokemon={pokemon}/>
      );
    }
    
  }
}

// export default class PokemonInfo extends Component{
//     state={
//         pokemon:null,
//         status:'idle',
//         error:null,
//     }
// }

// componentDidUpdate (prevProps,prevState) {
//     if(prevProps.pokemonName !== this.props.pokemonName){
//         this.setState({status:'pending'});

//         setTimeout (()=>{
//             fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
//             .then(res=>{
//                 if(res.ok){
//                     return res.jjson();
//                 }

//                 return Promise.reject(
//                     new Error(`No pokemon with name "${this.props.pokemonName}".`),
//                 )
//             })
//             .then(pokemon=>this.setState({pokemon,status:'resolved'}))
//             .catch(error=>this.setState({error,status:'rejected'}));
//         },1000)
//     }

// }
// render (){
//     const {status,pokemon,error}=this.state;

//     switch(status){
//         case "idle":
//             return <h1>Enter a neme of pokemon!</h1>

//             case 'pending':
//                 return <PokemonPendingView pokemonName={this.props.pokemonName} />;

//                 case 'rejected':
//                     return <PokemonErrorView message={error.message} />;

//                     case 'resolved':
//                         return <PokemonDataView pokemon={pokemon} />;

//                         default:return null;
//     }
// return ()
// }
