import React from 'react';
import './style.css';

const QuoteGeneratorView = ({ handleGetQuote, quote, character, buttonText }) => {
    return (
        <div id="QUOTE_CONTAINER" className="container">
            <h3 className="titleQuote">Your Daily Quote</h3>
            <div className="content">
                <blockquote>
                    <h4 className="quoteText">{quote}</h4>
                    <p className="quote-author">{`- ${character}`}</p>
                </blockquote>
            </div>
            <div className="subtitle">
                <button id="NEW_QUOTE_BUTTON" className="quote-button" onClick={handleGetQuote}>{buttonText}</button>
            </div>
        </div>
    )

}

export default QuoteGeneratorView;