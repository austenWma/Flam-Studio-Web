import React, {Component} from 'react'
import {render} from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import SideBar from 'react-fixed-sidebar'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton'

import $ from 'jquery'

class LandingWelcome extends Component {
    constructor (props) {
        super(props)
        this.state = {
        };
        this.openMenu = this.openMenu.bind(this)
    }

    componentDidMount() {
        (function() {

            "use strict";

            var toggles = document.querySelectorAll(".c-hamburger");

            for (var i = toggles.length - 1; i >= 0; i--) {
                var toggle = toggles[i];
                toggleHandler(toggle);
            };

            function toggleHandler(toggle) {
                toggle.addEventListener( "click", function(e) {
                e.preventDefault();
                (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
                });
            }

        })();

    }

    openMenu(event) {
        this.props.toggleMenu()
    }

    render() {
        return (
            <div>
                <div className="landingWelcomeTabBarContainer">
                    <div className="landingWelcomeTitle">
                        <div className="landingWelcomeTitleLogo">
                            <img src={'http://i66.tinypic.com/2zgu68p.png'} style={{height: '100%', width: '100%', marginTop: '10%'}} />
                        </div>
                    </div>
                    <div className="landingWelcomeMenuButton">
                        <button className="c-hamburger c-hamburger--htx" onClick={this.openMenu}>
                            <span>toggle menu</span>
                        </button>
                    </div>
                </div>
                <div className="landingWelcomeContentContainer">
                    <div className="landingWelcomeContentPictureContainer1">
                        <div className="landingWelcomeContentCaption1">
                            YOUR STUDIO, IN THE CLOUD
                        </div>
                    </div>
                    <div className="landingWelcomeContentPictureContainer2">
                        <div className="landingWelcomeContentCaption2">
                            Flamm is the best way to collaborate on music projects from start to finish
                        </div>
                    </div>
                    <div className="landingWelcomeContentPictureContainer3">
                        <div className="landingWelcomeContentDownloadButton">
                            <MuiThemeProvider>
                                <RaisedButton label="Download" primary={true} fullWidth={true} buttonStyle={{backgroundColor: "#19e495", width: '200px'}}/>
                            </MuiThemeProvider>
                        </div>
                    </div>
                    <div className="landingWelcomeContentPictureContainer4">
                        <img src="http://i65.tinypic.com/x2vrr5.png" border="0" className="landingWelcomeContentPictureBottom" />
                    </div>
                </div>
            </div>
        )
    }
    }

export default LandingWelcome;