import React, { Component } from 'react'
import styled from "styled-components"

// Import desired stylesheets
import "../styles/colors.css"
import "../styles/global.scss"

const ThemeSwitcher = styled.div`
  cursor: pointer;
`

export default class themeSwitcher extends Component {
  render() {
    return (
      <ThemeSwitcher>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            fillRule="evenodd"
            d="M401.292 81.3209C401.292 258.036 258.035 401.292 81.3199 401.292C78.9105 401.292 76.5067 401.265 74.1089 401.212C115.892 442.348 173.181 467.664 236.365 467.664C364.107 467.664 467.664 364.108 467.664 236.365C467.664 173.182 442.348 115.893 401.212 74.1099C401.265 76.5077 401.292 78.9115 401.292 81.3209ZM356.955 81.3209C356.955 233.55 233.549 356.955 81.3199 356.955C63.4466 356.955 45.9704 355.254 29.0445 352.005C9.98228 348.345 -7.24488 366.886 3.11646 383.299C51.935 460.633 138.151 512 236.365 512C388.594 512 512 388.594 512 236.365C512 138.151 460.632 51.9348 383.297 3.1164C366.884 -7.24467 348.344 9.98188 352.004 29.0438C355.253 45.97 356.955 63.4468 356.955 81.3209Z"
          />
        </svg>
      </ThemeSwitcher>
    )
  }
}
