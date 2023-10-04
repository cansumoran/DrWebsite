import React from 'react';
import {useState} from 'react';

function Card(props) {

    const [showFullText, setShowFullText] = useState(false);

    const toggleText = () => {
        setShowFullText(!showFullText);
    };

    return (
        <div className="card">
            <br/>
            <div className="row">
                <div className="col-md-6 text-center">
                    <div className="text-center">
                        <img alt="card-img" src={props.img} className="text-center img-fluid"/>
                    </div>
                </div>
                <div className="col-md-6 text-center">
                    <h3 className="card-title">{props.title}</h3>
                    <div className="p-3">
                        <p className="card-text text-left">
                            {showFullText ? (props.text) : (props.short)}
                        </p>
                        {props.text.length > 100 && (
                            <a className="read-more" onClick={toggleText}>
                                {showFullText ? 'Kısalt...' : 'Devamı...'}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
