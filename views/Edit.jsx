const React = require('react')
const Layout = require('./Layout')

class Edit extends React.Component {
    render() {
        const {place} = this.props
        return (
            <Layout>
            <div className="edit">
                <h1>Edit {place.name}</h1>
                <form action={`/places/edit/${place._id}?_method=put`} method="POST">
                  Name: <input type="text" name="name" defaultValue={place.name}/>
                  Description:  <textarea name="description" defaultValue={place.description}/>
                  
                  Quadrant: 
                {/* <label>Quadrant</label> <br/> */}
                <select name="quadrant" value={place.quadrant} defaultValue={place.quadrant}>
                    <option value="North">North</option>
                    <option value="Northeast">Northeast</option>
                    <option value="Southeast">Southeast</option>
                    <option value="Southwest">Southwest</option>
                    <option value="Northwest">Northwest</option>
                    <option value="Elsewhere">Elsewhere</option>
                </select>
            
                  Image URL: <input type="text" name="image" defaultValue={place.image}/>
                  Website URL: <input type="text" name="website" defaultValue={place.website}/>
                  Street Address:  <input type="text" name="address" defaultValue={place.address}/>
                  Type: <input type="text" name="type" defaultValue={place.type}/>
                  
                  {/* <div id="keywords"> */}
                  Keywords: <input type="text" name="keywords" defaultValue={place.keywords[0]}/> <br/>
                  <input type="text" name="keywords" defaultValue={place.keywords[1]}/> <br/>
                  <input type="text" name="keywords" defaultValue={place.keywords[2]}/>
                  {/* <button onclick={this.addKeywordInput}>Add another keyword</button> */}
                  {/* </div> */}
                  <input className="submit" type="submit" value="Update location"/>
                </form>
            </div>
            </Layout>
        )
    }
}

module.exports = Edit