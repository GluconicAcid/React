import React, { PureComponent } from 'react'

import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import { Outlet } from 'react-router-dom';

export class Layout extends PureComponent {
  render() {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    )
  }
}

export default Layout