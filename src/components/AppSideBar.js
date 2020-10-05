import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import React, { Component } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Styles
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './styles/AppSideBar.css';



class AppSideBar extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <SideNav
                onSelect={(selected) => {
                    // Add your code here
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav  defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <FontAwesomeIcon icon={['fas', 'home']} size='lg' />
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="library">
                        <NavIcon>
                            <FontAwesomeIcon icon={['fas', 'hdd']} size='lg' />
                        </NavIcon>
                        <NavText>
                            Library
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        );
    }
}

export default AppSideBar;