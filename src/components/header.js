import React from "react";

export default class Header extends React.Component{
  render() {
    return (
        <thead>
          <tr>
          <th><h3 style={{fontFamily:'Roboto'}}>Notes</h3></th>
          <th><h3 style={{fontFamily:'Roboto'}}>&nbsp;Action</h3></th>
          </tr>
        </thead>
    )
  }
}
