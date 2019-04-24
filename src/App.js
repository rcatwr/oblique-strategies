import React, { Component } from 'react';
import oblique from './data/oblique';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button, Heading, Container, Card, Columns, Section } from 'react-bulma-components'

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

      <Section>
        <Columns>
          <Columns.Column></Columns.Column>
          <Columns.Column>

          <Heading
            size={3}>OBLIQUE STRATEGIES</Heading>
          <Heading
            subtitle size={5}
            >Over one hundred worthwhile dilemmas
          </Heading>


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
    </Section>
    );
  }
}

export default App;
