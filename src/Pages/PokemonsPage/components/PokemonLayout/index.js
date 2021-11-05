import PropTypes from "prop-types"
import UserCard from "../../../../Components/UserCard";
import {CircularProgress} from "@mui/material"

const PokemonPageLayout = ({list, isLoading, handleGoToDetails}) => {
  return <div>
        <h1>Pokemons</h1>
        {isLoading ? <CircularProgress/> :
        <div>
                    {list.map(({name, url}) => (
                    <UserCard
                    key={url}
                    name={name}
                    city={url}
                    handleClick={() => handleGoToDetails(name)}
                    />
                    ))}
                </div>}

    </div>;
};
PokemonPageLayout.propTypes = {
list: PropTypes.arrayOf(PropTypes.shape({
name: PropTypes.string.isRequired,
url: PropTypes.string.isRequired,
}))
}

export default PokemonPageLayout;
