import React from 'react';
import Mall from './Mall';

const Mallbox = () => {
    const mallsInfo = [
        {
            id: 1,
            userIcon: "/icon.png",
            mallType: "announce",
            user: "management",
            content: "2024/01/30 からアップデートがあります."
        },
        {
            id: 2,
            userIcon: "/user1.png",
            mallType: "message",
            user: "user1",
            content: "今夜ぼくちんとデートしませんか"
        },
    ];

    return (
        <div style={{
            height: "400px", width: "300px", backgroundColor: "black",
            position: "fixed", top: "110px", right: "100px",
        }}>
            {/* Mall Boxのheader */}
            <div style={{
                height: "40px", width: "300px", backgroundColor: "black",
                display: "flex", justifyContent: "space-between", alignItems: 'center',
            }}>
                <div style={{ color: "white", fontSize: "24px", display: "flex", margin: "0px 30px" }}>Mall Box</div>
                <button style={{
                    height: "40px", width: "40px",
                    border: "none", backgroundColor: "black",
                    display: "flex", margin: "0px 25px", alignItems: "center", justifyContent: "center"
                }}>
                    <img src="/header-icon2.png" style={{ height: "30px", width: "30px", }} alt="header-icon2.png" />
                </button>
            </div>
            <img style={{
                height: "10px", width: "260px",
                display: "flex", margin: "0px 20px",
            }} src="/line.png" alt="line.png" />

            {/* メール ~  */}
            {mallsInfo.map((mallInfo) => (
                <Mall key={mallInfo.id} mallInfo={mallInfo} />
            ))}
        </div>
    )
}
export default Mallbox;
