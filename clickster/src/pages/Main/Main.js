import React, { Component } from "react";
import Card from "../../components/Card";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import Score from "../../components/Score";
import Parappa from "../../components/Parappa";
import Container from "../../components/Container";

class Main extends Component {
    state = {
        image: "",
        match: false,
        count: 0,
        images: [],
        clicked: [],
        status: ""
    };

    componentDidMount() {
        this.setupImages();
    }

    setupImages = () => {
        let images = [];
        let index = 40;
        let random = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < 12; i++) {
            index+= random;
            images.push(`https://picsum.photos/200/200?image=${index}`);
        }
    this.setState({ images: images });
    }

    shuffleArray = (array) => {
        let i = array.length -1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * i + 1);
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    clicked = (src) => {
        let images = this.shuffled();
        let clicked = [];
        let status = "";
        if (this.state.clicked.includes(src)) {
            status = "lost";
        } else if (this.state.clicked.length >= 11) {
            status = "won";
            clicked = [];
        } else {
            clicked = this.state.clicked;
            clicked.push(src);
        }

        this.setState({
            images: images,
            clicked: clicked,
            status: status
        });
    }

    shuffled = () => {
        return this.shuffleArray(this.state.images);
    }

    render() {
        return (
            <Parappa>
            <Navbar>
                <h1>Clickster!</h1>
                <Score guessed={this.state.clicked.length}>
                    {this.state.status == "won" ? 
                        (<h2>You won!</h2>)
                    : this.state.status == "lost" ? 
                        (<h2>You lost</h2>)
                    : ""}
                </Score>
            </Navbar>
                <Container>
                    <h1>Clickster!</h1>
                    <h3>Click an image only once, click all twelve without repeating and you win!</h3>
                    <div>
                        {this.state.images.map(image => {
                            return (
                                <Card
                                key={image}
                                src={image}
                                clicked={this.clicked}
                                />
                                );
                            })}
                    </div>
                </Container>
                            </Parappa>
        );
    }
}

export default Main;