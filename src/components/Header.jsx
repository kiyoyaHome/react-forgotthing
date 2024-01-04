import React from 'react'

const Header = (props) => {
  return (
    <div style={{
      height: "60px", width: "100%", backgroundColor: "black",
      display: "flex", justifyContent: "space-between"
    }}>
      
      <div style={{display: "flex", margin: "0px 0px"}}>
        {/* 要素1 */}{/* props関数呼び出し1 */}
        <button onClick={props.onClick1} style={{height: "60px", width: "60px", backgroundColor: "black", border: "none", cursor: "pointer"}}>
          <img style={{height: "48px", width: "48px"}} src="/header-icon1.png" alt="header-icon1.png" />
        </button>
        {/* 要素2 */}
        <button style={{height: "60px", width: "60px", backgroundColor: "black", border: "none", cursor: "pointer"}}>
          <img style={{height: "48px", width: "48px"}} src="/icon.png" alt="icon.png" />
        </button>
        {/* 要素3 */}
        <div style={{
          color: "white", fontSize: "20px",
          display: "flex", alignItems:"center", margin: "0px 60px"}}>
            App Name
        </div>
      </div>

      <div style={{display: "flex", margin: "0px 15px"}}>
        {/* 要素4 */}{/* props関数呼び出し2 */}
        <button onClick={props.onClick2} style={{height: "60px", width: "60px", backgroundColor: "black", border: "none", cursor: "pointer"}}>
          <img style={{height: "35px", width: "35px",  borderRadius: "50%"}} src="/header-icon2.png" alt="header-icon2.png" />
        </button>
        {/* 要素5 */}{/* props関数呼び出し3 */}
        <button onClick={props.onClick3} style={{height: "60px", width: "60px", backgroundColor: "black", border: "none", cursor: "pointer"}}>
          <img style={{height: "40px", width: "40px",  borderRadius: "50%"}} src="/user.png" alt="user.png" />
        </button>
      </div>
    </div>
  )
}
export default Header