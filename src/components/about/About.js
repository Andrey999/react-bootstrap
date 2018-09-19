import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap'
import './About.css'


class About extends Component {
    render() {
        return(
            <div>
                <Image src="assets/dog-people.jpg" className="header-image" />
                <Grid>
                    <Col xs={12} sm={8} smOffset={2}>
                        <Image src="assets/person-1.jpg" className="about-profile-pic" rounded />
                        <h3>Frank The Tank</h3>
                        <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your
                            brush and you just have to push them out.</p>
                        <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your
                            brush and you just have to push them out.</p>
                        <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your
                            brush and you just have to push them out.</p>
                        <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your
                            brush and you just have to push them out.</p>
                        <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your
                            brush and you just have to push them out.</p>
                    </Col>
                </Grid>
            </div>
        )

    }
}

export default About