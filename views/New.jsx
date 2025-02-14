const React = require('react')
const {Component} = React
const Layout = require('./Layout')

class New extends Component {
    // constructor(props){
    //     super(props);
    //     this.addKeywordInput = this.addKeywordInput.bind(this)
    // }
    // addKeywordInput() {
    //     const target = document.querySelector('#keywords')
    //     const newKeyword = document.createElement('input')
    //     newKeyword.type = "text"
    //     newKeyword.name = "keywords"
    //     target.appendChild(newKeyword)
    //     }    
    render() {
        return (
            <Layout>
            <div className="edit">
              <h1>Add new location</h1>
              <form action="/places" method="POST">
                  Name: <input type="text" name="name" /><br/>
                  Description: <textarea name="description" /><br/>
                  
                  Quadrant: <br/>
                  <input type="radio" name="quadrant" value="North"/> North <br/>
                  <input type="radio" name="quadrant" value="Northeast"/> Northeast<br/>
                  <input type="radio" name="quadrant" value="Southeast"/> Southeast<br/>
                  <input type="radio" name="quadrant" value="Northwest"/> Northwest<br/>
                  <input type="radio" name="quadrant" value="Southwest"/> Southwest<br/>
                  <input type="radio" name="quadrant" value="Elsewhere"/> Elsewhere<br/>
                  <br/>
                  Image URL: <input type="text" name="image"/> <br/>
                  Website URL: <input type="text" name="website"/> <br/>
                  Street Address:  <input type="text" name="address"/> <br/>
                  Type: <input type="text" name="type" placeholder="Art Gallery, Bar, Restaurant, etc."/> <br/>
                  
                  <div id="keywords">
                  Keywords: <input type="text" name="keywords" /> <br/>
                  <input type="text" name="keywords" /><br/>
                  <input type="text" name="keywords" /><br/>
                  {/* <button onclick={this.addKeywordInput}>Add another keyword</button> */}

                  <input type="submit" value="Add place"/>
                  </div>
                  
               </form>
            </div> 
            </Layout>
        )
    }
}

module.exports = New