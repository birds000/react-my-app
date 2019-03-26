import React, { Component } from 'react';
import Slide from './Slide';
import { Container } from 'reactstrap';

export default class Home extends Component {
    render() {
        return (

            <div>
                <Container>
                    <Slide />
                </Container>
            </div>
        );
    }
}