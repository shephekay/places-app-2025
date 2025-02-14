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
                  Name: <input type="text" name="name" value={place.name}/><br/>
                  Description:  <textarea name="description" value={place.description}/><br/>
                  
                  Quadrant: <br/>
                  <input type="radio" name="quadrant" value="North" defaultChecked={place.quadrant === "North"? true : false}/> North <br/>
                  <input type="radio" name="quadrant" value="Northeast" defaultChecked={place.quadrant === "Northeast"? true : false}/> Northeast <br/>
                  <input type="radio" name="quadrant" value="Southeast" defaultChecked={place.quadrant === "Southeast"? true : false}/> Southeast <br/>
                  <input type="radio" name="quadrant" value="Northwest" defaultChecked={place.quadrant === "Northwest"? true : false}/> Northwest <br/>
                  <input type="radio" name="quadrant" value="Southwest" defaultChecked={place.quadrant === "Southwest"? true : false}/> Southwest <br/>
                  <input type="radio" name="quadrant" value="Elsewhere" defaultChecked={place.quadrant === "Elsewhere"? true : false}/> Elsewhere <br/>
                  <br/>
                  Image URL: <input type="text" name="image" value={place.image}/> <br/>
                  Website URL: <input type="text" name="website" value={place.website}/> <br/>
                  Street Address:  <input type="text" name="address" value={place.address}/> <br/>
                  Type: <input type="text" name="type" value={place.type}/> <br/>
                  
                  <div id="keywords">
                  Keywords: <input type="text" name="keywords" value={place.keywords[0]}/> <br/>
                  <input type="text" name="keywords" value={place.keywords[1]}/><br/>
                  <input type="text" name="keywords" value={place.keywords[2]}/><br/>
                  {/* <button onclick={this.addKeywordInput}>Add another keyword</button> */}
                  </div>
                  <input type="submit" value="Update location"/>
                </form>
            </div>
            </Layout>
        )
    }
}

module.exports = Edit