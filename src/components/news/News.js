import React, { Component } from 'react'
import {Grid, Row, Image, Col} from 'react-bootstrap'
import './News.css'


class News extends Component {
    render() {
        return(
            <div>
              <Image src="assets/mountain-man.jpg" className="header-image" />

                <Grid>
                    <h2>News</h2>
                    <Row>
                        <Col xs={12} sm={8} className="main-section" >
                            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your
                                brush and you just have to push them out.</p>
                            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your
                                brush and you just have to push them out. That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your
                                brush and you just have to push them out</p>
                            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your
                                brush and you just have to push them out.</p>
                            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your
                                brush and you just have to push them out.</p>
                        </Col>

                        <Col xs={12} sm={4} className="sidebar-section">
                            <Image src="assets/dog-people.jpg" />
                            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your
                                brush and you just have to push them out.That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your
                                brush and you just have to push them out</p>
                        </Col>

                    </Row>
                </Grid>
            </div>
        )

    }
}

export default News