import PropTypes from "prop-types"
import React, { useEffect, useRef } from "react"

// //Import Scrollbar
import SimpleBar from "simplebar-react"

// MetisMenu
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"

const SidebarContent = props => {
  const ref = useRef()
  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    const pathName = props.location.pathname

    const initMenu = () => {
      new MetisMenu("#side-menu")
      let matchingMenuItem = null
      const ul = document.getElementById("side-menu")
      const items = ul.getElementsByTagName("a")
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i]
          break
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem)
      }
    }
    initMenu()
  }, [props.location.pathname])

  useEffect(() => {
    ref.current.recalculate()
  })

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300
      }
    }
  }

  function activateParentDropdown(item) {
    item.classList.add("active")
    const parent = item.parentElement
    const parent2El = parent.childNodes[1]
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }

    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement

      if (parent2) {
        parent2.classList.add("mm-show") // ul tag

        const parent3 = parent2.parentElement // li tag

        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false
    }
    scrollElement(item);
    return false
  }

  return (
    <React.Fragment>
      <SimpleBar style={{ maxHeight: "100%" }} ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{props.t("Main")} </li>
            <li>
              <Link to="/dashboard" className="waves-effect">
                <i className="mdi mdi-view-dashboard"></i>
                <span>{props.t("Dashboard")}</span>
              </Link>
            </li>

            <li className="menu-title">{props.t("Management Data")}</li>
  
            <li>
              <Link to="/tables-datatable" className=" waves-effect">
                <i className="mdi mdi-teach"></i>
                <span>{props.t("Data Guru")}</span>
              </Link>
            </li>
            <li>
              <Link to="/tables-datatable" className=" waves-effect">
                <i className="mdi mdi-human-male-male"></i>
                <span>{props.t("Data Siswa")}</span>
              </Link>
            </li>
            <li>
              <Link to="/tables-datatable" className=" waves-effect">
                <i className="mdi mdi-hubspot"></i>
                <span>{props.t("Program dan Jurusan")}</span>
              </Link>
            </li>
            <li>
              <Link to="/tables-datatable" className=" waves-effect">
                <i className="mdi mdi-book-open-page-variant"></i>
                <span>{props.t("Mata Pelajaran")}</span>
              </Link>
            </li>

            <li className="menu-title">{props.t("Instansi")}</li>

            <li>
              <Link to="/calendar" className=" waves-effect">
                <i className="mdi mdi-book-account"></i>
                <span>{props.t("Kelola Instansi")}</span>
              </Link>
            </li>
            <li>
              <Link to="/calendar" className=" waves-effect">
                <i className="mdi mdi-school"></i>
                <span>{props.t("Profile Instansi")}</span>
              </Link>
            </li>
            <li>
              <Link to="/calendar" className=" waves-effect">
                <i className="mdi mdi-wifi"></i>
                <span>{props.t("Kelola Wifi")}</span>
              </Link>
            </li>
            <li>
              <Link to="/calendar" className=" waves-effect">
                <i className="mdi mdi-google-maps"></i>
                <span>{props.t("Kelola Lokasi")}</span>
              </Link>
            </li>

            <li className="menu-title">{props.t("Laporan")}</li>

            <li>
              <Link to="/calendar" className=" waves-effect">
                <i className="mdi mdi-chart-bar"></i>
                <span>{props.t("Rekap Absensi")}</span>
              </Link>
            </li>
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  )
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(SidebarContent))
