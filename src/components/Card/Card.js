import React from 'react'
import PropTypes from 'prop-types'



const Card= ({Movie}) => {
    return (
        <div className="col-md-4">
        <div className="card">
        <img src={Movie.Poster} alt={Movie.title} className="card-img-top" width="100"/>
        <div className="card-body">
            <h4>{Movie.Title} {Movie.Year }</h4>
            <p>{Movie.Type}</p>
        </div>
    </div>
        </div>

    ) 
}

Card.propTypes={
    Movie:PropTypes.shape({
        Title:PropTypes.string,
        Poster:PropTypes.string,
        Year:PropTypes.string,
        Type:PropTypes.string,
    }).isRequired
}

export default Card