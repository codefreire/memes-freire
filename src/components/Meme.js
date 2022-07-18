import React from "react";
import PropTypes from 'prop-types';

const Meme = ({name, imageUrl}) => (
    <div className="single-meme">
        <div className="title-meme">
            <h2 className="meme-name">{name}</h2>
        </div>
        <img src={imageUrl} alt={name}/>
    </div>
)

Meme.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
}

export default Meme