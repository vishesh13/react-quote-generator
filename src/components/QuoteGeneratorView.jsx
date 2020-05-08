import React from 'react';
import './style.css';

const QuoteGeneratorView = ({ handleGetQuote, quote, character, buttonText }) => {
    return (
        <div id="QUOTE_CONTAINER" className="container">
            <div className="content">
                <h3 className="titleQuote">Your Daily Quote</h3>
                <div>
                    <h4 className="quoteText">{quote}</h4>
                    <p className="quote-author">{character}</p>
                </div>
            </div>
            <button id="NEW_QUOTE_BUTTON" className="quote-button" onClick={handleGetQuote}>{buttonText}</button>
        </div>)

}

export default QuoteGeneratorView;