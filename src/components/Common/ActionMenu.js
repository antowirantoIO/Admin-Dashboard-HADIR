import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"


const ActionMenu = () => {
    const [actionMenu, setActionMenu] = useState(false)
    return (
        <Dropdown
          isOpen={actionMenu}
          toggle={() => setActionMenu(!actionMenu)}
          className="d-inline-block"
        >
          <div className="dropdown dropdown-topbar d-inline-block">

            <DropdownToggle
              className="btn btn-white"
              tag="button"
            ><i className="mdi mdi-dots-vertical"></i>
            </DropdownToggle>

            <DropdownMenu className="dropdown-menu-end">
              <DropdownItem tag="a" href="#"><i className="mdi mdi-pencil text-warning"></i> Update</DropdownItem>
              <DropdownItem tag="a" href="#"><i className="mdi mdi-eye text-info"></i> Detail</DropdownItem>
              <div className="dropdown-divider"></div>
              <DropdownItem tag="a" href="#"><i className="mdi mdi-delete text-danger"></i> Delete</DropdownItem>
            </DropdownMenu>

          </div>
        </Dropdown>
    )
};

export default ActionMenu;