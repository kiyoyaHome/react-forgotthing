import React from 'react'

const Header = (props) => {
  return (
    <div style={{
      height: "60px", width: "100%", backgroundColor: "black",
      display: "flex", justifyContent: "space-between"
    }}>
      <div style={{display: "flex", margin: "0px 0px"}}>
        <button onClick={props.onClick} style={{height: "60px", width: "60px", backgroundColor: "black", border: "none", cursor: "pointer"}}>
          <img style={{height: "48px", width: "48px"}} src="/header-icon1.png" alt="header-icon1.png" />
        </button>
        <button style={{height: "60px", width: "60px", backgroundColor: "black", border: "none", cursor: "pointer"}}>
          <img style={{height: "48px", width: "48px"}} src="/icon.png" alt="icon.png" />
        </button>
        <div style={{
          color: "white", fontSize: "20px",
          display: "flex", alignItems:"center", margin: "0px 60px"}}>
            App Name
        </div>
      </div>

      <div style={{display: "flex", margin: "0px 15px"}}>
        <button style={{height: "60px", width: "60px", backgroundColor: "black", border: "none", cursor: "pointer"}}>
          <img style={{height: "35px", width: "35px",  borderRadius: "50%"}} src="/header-icon2.png" alt="header-icon2.png" />
        </button>
        <button style={{height: "60px", width: "60px", backgroundColor: "black", border: "none", cursor: "pointer"}}>
          <img style={{height: "35px", width: "35px",  borderRadius: "50%"}} src="/usericon.png" alt="usericon.png" />
        </button>
      </div>
    </div>
  )
}
export default Header