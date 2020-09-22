import React from 'react';
import axios from 'axios';
import QuoteGeneratorView from './QuoteGeneratorView';

/**
 * Container class with handler methods
 */
class QuoteGeneratorContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            character: '',
            quoteReceived: true,
        }
        this.handleGetQuote = this.handleGetQuote.bind(this);
    }

    componentDidMount() {
        document.getElementById('NEW_QUOTE_BUTTON').click();
    }
    /**
     * handler function to retrieve quote service call request
     * @param {*} event 
     */
    handleGetQuote(event) {
        if (event) {
            axios.get(
                `https://thesimpsonsquoteapi.glitch.me/quotes`
            ).then(response => {
                const { quote, character } = response.data[0];
                this.setState({
                    quote: this.state.quoteReceived ? quote : 'Failed to load.Click on Try Again!!!',
                    character: this.state.quoteReceived ? character : '',
                    quoteReceived: true,
                })
            }).catch(err => {
                this.setState({
                    quoteReceived: false,
                })
            })
        }
    }

    render() {
        const { quote, character, quoteReceived } = this.state;
        let buttonText = quoteReceived ? 'New Quote' : 'Try Again!!!';

        return (
            <QuoteGeneratorView handleGetQuote={this.handleGetQuote} quote={quote} character={character} buttonText={buttonText} />
        )
    }
}

export default QuoteGeneratorContainer;