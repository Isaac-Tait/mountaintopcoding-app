import React, {Component} from "react"
import Sidebar from "react-sidebar"

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sidebarOpen: true
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
      }
    
      onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
      }
    
      render() {
        return (
          <Sidebar
            sidebar={
            <h4>Menu</h4>
              <ol>
                <li>Theology</li>
                <li>Tenkara</li>
                <li>Gravel Cycling</li>
                <li>Backcountry Skiing</li>
              </ol>
          }
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            styles={{ sidebar: { background: "white" } }}
          >
            <button onClick={() => this.onSetSidebarOpen(true)}>
              Open sidebar
            </button>
          </Sidebar>
        );
      }
    }
    
    export default NavBar