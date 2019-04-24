import React, { Component } from 'react';
import oblique from './data/oblique';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button, Heading, Container, Card, Columns } from 'react-bulma-components'

class App extends Component {
  constructor(){
    super()
    this.state = {
      card: "Consult the deck by clicking 'draw'"
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(){
     const id = Math.floor(Math.random() * (114 - 1)) + 1
     console.log(id)
     oblique.forEach((element)=>{
       if (element.id === id){
         this.setState({card:element.card})
       }
    })

  }
  render() {
    return (
      <Container fluid>
        <Columns>
          <Columns.Column></Columns.Column>
          <Columns.Column>

          <Heading>OBLIQUE STRATEGIES</Heading>
          <p>Over one hundred worthwhile dilemmas</p>


      <Card>
        <p>{this.state.card}</p>
      </Card>
        <Button
            onClick={this.handleChange}
            color="primary"
            size="medium"
            fullwidth="true"
            >
              draw
        </Button>

        <p className="source">Oblique Strategies © 1975, 1978, and 1979 Brian Eno/Peter Schmidt </p>
        <p className="source"><a href="https://en.wikipedia.org/wiki/Oblique_Strategies">Wikipedia</a></p>
        </Columns.Column>
        <Columns.Column></Columns.Column>
      </Columns>
    </Container>
    );
  }
}

export default App;
