import { Component } from "react";
import { toast } from "react-toastify";

export default class PokemonForm extends Component {
 
  state = {
    pokemonName: "",
  };

  handleNameChange = (event) => {
    this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if(this.state.pokemonName.trim() === ''){
        alert('Enter pokemon name');
        // toast.error("Enter pokemon name")
        return;
    }

    this.props.onSubmit(this.state.pokemonName);
    this.setState({ pokemonName: "" });
  };
  render() {

    return (
      <form
        onSubmit={this.handleSubmit}
        // style={styles.form}
      >
        <input
          type="text"
          name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.handleNameChange}
        />
        <button>Find</button>
      </form>
    );
  }
}
