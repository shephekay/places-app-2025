const React = require('react')
const {Component} = React
const Layout = require('./Layout')

class About extends Component {
    render() {
        return (
            <Layout>
                <div className='about'>
                    <h3>About</h3>
                    <p>This application serves as a collection of some of my favorite places in Portland. When people come to visit, I'm always at a loss for recommendations, so this is a place to record not only those, but spots I like and often forget about. Add your own!</p> 
                    <p>One of the first apps I ever made in 2020, revamped in 2025. Built with Node.js, MongoDB, Mongoose, Express, React, and Vanilla CSS, it adheres to RESTful architecture and the MVC file structure, and performs all CRUD operations. <a href="https://github.com/shephekay/places-app-2025">See the code here.</a></p>

                    <h3>Credits</h3>
                    <p>Favicon: St. Johns Bridge by Dreshad Williams from <a href="https://thenounproject.com/browse/icons/term/st-johns-bridge/" target="_blank" title="St. Johns Bridge Icons">Noun Project</a> (CC BY 3.0)</p>
                    <p>Application by Sheila Kelley</p>

                    <h3>Things to fix:</h3>
                    <ul>
                        <li>Styling of individual place views (show page)</li>
                    </ul>

                    <h3>Functionality to be added:</h3>
                    <ul>
                        <li>Add user's name when adding a new place</li>
                        <li>Responsive design for mobile</li>
                        <li>Sort, filter, and search</li>
                        <li>Search by keyword, type, quadrant</li>
                        <li>Restrict Edit and Delete functions</li>
                        <li>Street address autocomplete</li>
                        <li>Remove empty keyword elements</li>
                        <li>Option to add infinite-ish keywords</li>
                    </ul>
                </div>

            </Layout>
        )
    }
}

module.exports = About