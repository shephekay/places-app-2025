const React = require('react')
const Layout = require('./Layout')

class Show extends React.Component {
    render() {
        const {place} = this.props
        return (
            <Layout>
            <div className="show">
                <h1>{place.name}</h1>
                <div className="card">
                    
                    
                    <div className="card-left">
                       {place.image?  <img src={place.image} alt={place.name}/> : <a id="gray" href={`/places/edit/${place._id}`}>Add an image</a>}
                    </div>
                   
                    
                    
                    <div className="card-right">
                        <h4 id="type">{place.type}</h4>
                        <h4 id="quadrant">Neighborhood: {place.quadrant}</h4>                       
                        <a href={place.website}></a>
                        <p id="description">{place.description}</p> 
                         
                        <div className="keywords">
                            {place.keywords[0]?<p>Keywords:</p> : ''}
                            {place.keywords.map((keyword, index) => {
                            return <a key={index} href="#">{`${keyword} `}</a>
                            
                        })}
                        </div>  
                        <div className="buttons">                
                            <a id="edit" href={`/places/edit/${place._id}`}>Edit this location</a>
                            <form action={`/places/${place._id}?_method=delete`} method="post">
                                <input type="submit" value="Delete this location"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </Layout>
        )
    }
}

module.exports = Show