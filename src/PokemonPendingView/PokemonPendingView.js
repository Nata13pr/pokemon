import PokemonDataView from '../PokemonDataView/PokemonDataView';
import pendingImage from './../Components/pending.png';

export default function PokemonPendingView ({pokemonName}){
    const pokemon={
        name:pokemonName,
        sprites:{
            other:{
                'official-artwork':{
                    front_default:pendingImage,
                },
            },
        },
        stats:[],
    }
    return (
        <div>
            <div>
                {/* <ImSpinner size='32'  className='icon-spin'/> */}
                Loading...
            </div>
            <PokemonDataView pokemon={pokemon}/>
        </div>
    )
}