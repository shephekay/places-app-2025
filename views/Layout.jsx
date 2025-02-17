const React = require('react')

class Layout extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isActive: false
        }
        this.toggleActive = this.toggleActive.bind(this)
    }
    toggleActive(){
        const currentState = this.state.isActive
        this.setState({isActive: !currentState})
    }
    render(){
        return(
            <html>
                <head>
                    {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"/> */}
                    {/* <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@700&display=swap" rel="stylesheet" /> */}
                    {/* {this.props.styles?  this.props.styles : ''} */}
                    <link rel="stylesheet" href="/css/style.css"/>
                    <link rel="icon" href='/noun-st-johns-bridge-217895.svg'/>
                    <title>Sheila's Best of Portland</title>
                </head>
                <body>
        
                    <nav>
                        <h1 id="header"><a href="/places">Sheila's Best of Portland</a></h1>
                        <a href="/places">Home</a>
                        <a href="/places/about">About</a>
                        <a href="/places/new">Add a new place</a>
                        {/* <a href="#" onClick={}>Search by quadrant</a> */}

                        {/*<div className="dropdown">
                            <button 
                                className='drop-btn'
                                onClick={this.toggleActive()}
                                >Search by quadrant</button>
                            <div className="drop-content"
                            id={this.state.isActive? "is-active" : ""}>
                                <a href="/places/quad/North">North</a>
                                <a href="/places/quad/Northeast">Northeast</a>
                                <a href="/places/quad/Southeast">Southeast</a>
                                <a href="/places/quad/Northwest">Northwest</a>
                                <a href="/places/quad/Southwest">Southwest</a>
                                <a href="/places/quad/Elsewhere">Elsewhere</a>
                            </div>
                        </div> */}

                        {/* <a id="login" href="#">Log in</a> */}

                    </nav>

                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Layout