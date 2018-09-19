import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'
import  './Home.css'

class Home extends Component {
    render() {
        return(
            <Grid>

                <Jumbotron>
                    <h2>Welcome to code life</h2>
                    <p>This is how to build a website with React, React-Router * React-Bootstrap</p>
                    <Link to="/about">
                        <Button bsStyle="primary">About</Button>
                    </Link>
                </Jumbotron>

                <Row ClassName="show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person-1.jpg" circle className="profile-pic" />
                        <h3>Frank</h3>
                        <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your
                            brush and you just have to push them out.</p>
                    </Col>

                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person-2.jpg" circle className="profile-pic" />
                        <h3 text-center>Vanessa</h3>
                        <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your
                            brush and you just have to push them out.</p>
                    </Col>

                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person-3.jpg" circle className="profile-pic" />
                        <h3 >Andrew</h3>
                        <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your
                            brush and you just have to push them out.</p>
                    </Col>

                </Row>

            </Grid>
        )

    }
}

export default Home