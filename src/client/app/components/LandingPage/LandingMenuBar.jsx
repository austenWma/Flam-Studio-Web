import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import $ from 'jquery'

class LandingMenuBar extends Component {
    constructor (props) {
        super(props)
        this.state = {
        };
    }

    componentDidMount() {
        $('.landingMenuTab0').click(() => {
            this.props.scrollToTab(0)
        })
        $('.landingMenuTab1').click(() => {
            this.props.scrollToTab(1)
        })
        $('.landingMenuTab2').click(() => {
            this.props.scrollToTab(2)
        })
        $('.landingMenuTab3').click(() => {
            this.props.scrollToTab(3)
        })
        $('.landingMenuTab4').click(() => {
            this.props.scrollToTab(4)
        })
    }


    render() {
        return (
        <div className="landingMenuBarContainer">
            <div className="landingMenuBarPlaceholder"></div>  
            <div className="landingMenuBarTabs landingMenuTab0">
                What We Do
            </div>
            <div className="landingMenuBarTabs landingMenuTab1">
                Who We Are
            </div>
            <div className="landingMenuBarTabs landingMenuTab2">
                How it Works
            </div>
            <div className="landingMenuBarTabs landingMenuTab3">
                Products
            </div>
            <div className="landingMenuBarTabs landingMenuTab4">
                Contact
            </div>
        </div>
        )
    }
    }

export default LandingMenuBar;