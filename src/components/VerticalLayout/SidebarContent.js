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
              <Link to="/management/teacher" className=" waves-effect">
                <i className="mdi mdi-teach"></i>
                <span>{props.t("Data Guru")}</span>
              </Link>
            </li>
            <li>
              <Link to="/management/student" className=" waves-effect">
                <i className="mdi mdi-human-male-male"></i>
                <span>{props.t("Data Siswa")}</span>
              </Link>
            </li>
            <li>
              <Link to="/management/employe" className=" waves-effect">
                <i className="mdi mdi-account-hard-hat"></i>
                <span>{props.t("Data Pegawai")}</span>
              </Link>
            </li>
            <li>
              <Link to="/management/major" className=" waves-effect">
                <i className="mdi mdi-hubspot"></i>
                <span>{props.t("Program dan Jurusan")}</span>
              </Link>
            </li>
            <li>
              <Link to="/management/subjects" className=" waves-effect">
                <i className="mdi mdi-book-open-page-variant"></i>
                <span>{props.t("Mata Pelajaran")}</span>
              </Link>
            </li>

            <li className="menu-title">{props.t("Instansi")}</li>

            <li>
              <Link to="/institutions/manage" className=" waves-effect">
                <i className="mdi mdi-book-account"></i>
                <span>{props.t("Kelola Instansi")}</span>
              </Link>
            </li>
            <li>
              <Link to="/institutions/profile" className="waves-effect">
                <i className="mdi mdi-school"></i>
                <span>{props.t("Profile Instansi")}</span>
              </Link>
            </li>
            <li>
              <Link to="/institutions/calendar" className=" waves-effect">
                <i className="mdi mdi-calendar-check"></i>
                <span>{props.t("Kalender Akademik")}</span>
              </Link>
            </li>

            <li className="menu-title">{props.t("Laporan")}</li>

            <li>
              <Link to="/report/recap" className=" waves-effect">
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
// kmh ieu lani urg t bisa nempo hasil naa
// tak tau 
//haiyah lu olang macam mana ah
// tapi tetap tidak bisa ma
// haiyahhh macam mana ini
// tugas bomba padamkan api je keu?
// eeee tugas bomba lebihh daripada ituu
// kucing atas pokok, kerbau masuk parit, kuda terlepas, ular dalam rumah,,, semuaaaa kami selamat kann
// manaaa adaaa, jual itik lebihh penat ohh
// nak makan apa? nasi goreng adeu, ayam goreng adeu, nasi lemak adeu, semuaaaa adeu, ada mau?
// mei mei jaga depan ada longkang. mana haiya lompat haiya mei mei lompat haiya haiya haiya
// abcd ada eu uncle?
// abcd adeuu, nah uncle bagi cuma cuma, spesial untuk korang budak ketot
// uncle uncle nak ayam goreng
// mail tak na jual
// kita orang tolong bantu jual yeu mail
// bolehhh
// yeayyy, nanti bagi kita orang upah yeu mail
// iyeuuuu
// singgit sorang yeu maill
// iyeuuuuu
// korang botak mana bisa tumbuh rambut
// terimakasi monyet kau lah sahabat terbaikkkuuuu
// pada zaman dahuluuuu

// astagfirullah ngakak:(
  // ingkeun gih wkwkwk
  // maloeeeeee
  // ulah dibaca :(
    // okee aku bakal tutup mata gak baca wkwk
    // telat nyaa, lupaa teu tatadi wkwk
    // malu coy dibaca anto wkwkwk
    // gak bisa buka port broo pada
    // dimanaa lagi
    // sayeu keneu amacam mana ni ngab

    // nih tau gak di android aya trouble gak bisa navigasi force close wae:(

    // jadi task nya skrang apa?

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(SidebarContent))
