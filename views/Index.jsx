const React = require('react');
const Layout = require('./Layout')

class Index extends React.Component {
    render() {
        // console.log(this.props)
        const { places, title } = this.props;
        //can store html in variables
        // const logoutButton = (<form action="/sessions/?_method=delete" method="post">
        //     <input type="submit" value="Log out"/>
        // </form>)
        return (
            <Layout>
                <div className="index">
                    <h2>{title} All Portland</h2>
                    <div className="container">
                        
                    {places.map((place, index) => {
                        return (
                            <div className="card" key={index}>
                                <div className="image-wrapper">
                                    <img className="card-img-top" src={place.image ? place.image : `https://cdn.pixabay.com/photo/2014/08/11/19/26/portland-415957_1280.jpg` }/>
                                </div>
                                <div className="card-body">                                
                                    <a className="name" href={`/places/${place._id}`}>{place.name}</a>
                                    <div className="row">
                                        <p>{place.type}</p>
                                        <p>{place.quadrant}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </Layout>
        )
    }
}

module.exports = Index;