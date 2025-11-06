import React from 'react';

const Card = (props) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={props.imageUrl} alt={props.title} className="card-img-top w-full h-40 object-cover" />

            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>

                <button className="card-button btn btn-danger justify-center align-items-center mt-3 W-auto">
                    MLB.COM
                </button>
            </div>
        </div>
    );
};


export default Card;

