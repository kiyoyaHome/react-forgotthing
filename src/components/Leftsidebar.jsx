import React from 'react'

const Leftsidebar = () => {
  return (
    <div style={{
        height: "100vh", width: "250px", backgroundColor: "black",
    }}>
      {/* 要素1 */}
      <div style={{height: "4px", width: "250px", backgroundColor: "black"}}></div>
      <button style={{
        height: "40px", width: "250px", backgroundColor: "black",
        border: "none", cursor: "pointer",
        display: "flex", alignItems: "center",
      }}>
        <img src="/help-icon.png" style={{height: "30px", width: "30px", display:"flex", margin: "0px 10px 0px 20px"}} alt="help-icon.png" />
        <div style={{color: "white", fontSize: "20px"}}>HELP</div>
      </button>
      <img style={{
        height: "3px", width: "210px",
        display: "flex", margin: "4px 20px",
      }} src="/line.png" alt="line.png" />

      {/* 要素2 */}
      <button style={{
        height: "40px", width: "220px", backgroundColor: "black",
        border: "none", cursor: "pointer",
        display: "flex", alignItems: "center",
      }}>
        <img src="/content.png" style={{height: "30px", width: "30px", display:"flex", margin: "0px 10px 0px 20px"}} alt="help-icon.png" />
        <div style={{color: "white", fontSize: "20px"}}>Content</div>
      </button>
      <img style={{
        height: "3px", width: "210px",
        display: "flex", margin: "4px 20px",
      }} src="/line.png" alt="line.png" />

      {/* 要素3 */}
      <button style={{
        height: "40px", width: "250px", backgroundColor: "black",
        border: "none", cursor: "pointer",
        display: "flex", alignItems: "center",
      }}>
        <img src="/problem.png" style={{height: "30px", width: "30px", display:"flex", margin: "0px 10px 0px 20px"}} alt="help-icon.png" />
        <div style={{color: "red", fontSize: "20px"}}>Problem report</div>
      </button>
      <img style={{
        height: "3px", width: "210px",
        display: "flex", margin: "4px 20px",
      }} src="/line.png" alt="line.png" />

      {/* 要素4 */}
      <div style={{
        height: "40px", width: "250px", backgroundColor: "black",
        border: "none", cursor: "pointer",
      }}>
        <div style={{color: "white", fontSize: "10px", display: "flex", margin: "0px 0px 0px 20px"}}>
          © 2024 kokoko Inc.
        </div>
      </div>
    </div>
  )
}
export default Leftsidebar