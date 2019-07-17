import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

  //import { AppProvider, AppConsumer } from '../App'

export default class TopNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    
    return (

      <div>
        {  }
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">NutriHelp</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Preguntas
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <a href="/preguntas">Listado</a>
                  </DropdownItem>
                  <DropdownItem>
                    <a href="/preguntas/crear">Crear</a>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Limpiar
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavLink href="http://localhost:3000/usuarios/autenticar">
                {" "}
                Iniciar{" "}
              </NavLink>
              <NavLink href="http://localhost:3000/usuarios/registrar">
                {" "}
                Registrar{" "}
              </NavLink>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}