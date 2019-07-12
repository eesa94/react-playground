import React, { Component } from 'react';
import styled from 'styled-components';
import { Squeeze } from 'react-burgers';

const NavBar = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 15px;
  background-color: rgba(210, 11, 33, 0);
`;

const styles = {
  navbar: {
    width: '100%',
    height: '100px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    padding: '0 15px',
    backgroundColor: 'rgba(210, 11, 33, 0)',
    transition: '0.5s'
  },
  header: {
    color: '#d20b21',
    transition: '0.3s'
  }
};

const hoveredStyles = {
  navbar: {
    backgroundColor: 'rgba(210, 11, 33, 1)'
  },
  header: {
    color: '#fff'
  }
};

class Barburrito extends Component {
  state = {
    active: false,
    hovered: false
  };

  toggleBurger = () => {
    this.setState({
      active: !this.state.active
    });
  };

  handleMouseEnter = () => {
    this.setState(
      {
        hovered: true
      },
      () => {
        document.addEventListener('mouseleave', this.handleMouseLeave);
      }
    );
  };

  handleMouseLeave = () => {
    this.setState(
      {
        hovered: false
      },
      () => {
        document.removeEventListener('mouseleave', this.handleMouseLeave);
      }
    );
  };

  render() {
    return (
      <nav
        style={
          this.state.hovered
            ? { ...styles.navbar, ...hoveredStyles.navbar }
            : styles.navbar
        }
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <h1
          className='brand changa6'
          style={
            this.state.hovered
              ? { ...styles.header, ...hoveredStyles.header }
              : styles.header
          }
        >
          BRAND
        </h1>
        <Squeeze
          width={30}
          lineHeight={3}
          lineSpacing={4}
          color={this.state.hovered ? '#fff' : '#d20b21'}
          className='burger'
          active={this.state.active}
          onClick={() => {
            this.toggleBurger();
            // this.navOpen();
          }}
        />
      </nav>
    );
  }
}

export default Barburrito;
