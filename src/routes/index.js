import React, { Component } from 'react'
import { CounterContainer } from 'containers'
import { Header } from 'components'
import { Apps } from 'components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`text-align: center;`

class Routes extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Header />
          <Apps />
          <Route path="/" component={CounterContainer} />
        </Container>
      </Router>
    )
  }
}

export default Routes
