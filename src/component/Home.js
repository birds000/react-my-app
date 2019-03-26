import React, { Component } from 'react';
import { Container } from 'reactstrap';

export default class Home extends Component {
    render() {
        return (
            <div className="bg dark">
                <Container>
                    <div class="card bg-dark text-white">
                        <img class="card-img" src="https://steamcdn-a.akamaihd.net/steam/subs/54029/header_586x192.jpg?t=1544227353" alt="Card image"></img>
                        <div class="card-img-overlay">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text">Last updated 3 mins ago</p>
                        </div>
                    </div>

                    
                </Container>
            </div>
        );
    }
}