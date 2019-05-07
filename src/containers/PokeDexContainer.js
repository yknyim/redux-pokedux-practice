// A "smart" container has three jobs:
// 1. grab stuff from redux
// 2. grab a dumb component
// 3. smash them together

import { connect } from 'react-redux';
import PokeDex from '../components/PokeDex';


// We have two jobs:
// 1. tell it how to map redux state to react props
// 2. tell it how to map redux dispatch to react props

// "translate" from redux state to react props
const mapStateToProps = (state) => {
    // return our own custom props object
    return {
        // react: redux
        cards: state.cards
    }
};

// connect gives us a function that knows how to translate for a dumb component
const makeComponentSmart = connect(mapStateToProps);
const SmartPokeDex = makeComponentSmart(PokeDex);

export default SmartPokeDex;