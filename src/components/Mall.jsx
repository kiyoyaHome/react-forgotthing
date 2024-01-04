import React from 'react';

const Mall = (mallInfo) => {
    return (
        <div>
            <div style={{ height: "160px", width: "300px", backgroundColor: "black", }}>
                <div style={{ display: "flex", }}>
                    {/* ユーザーアイコン */}
                    <button style={{
                        height: "50px", width: "50px",
                        border: "none", backgroundColor: "black",
                        display: "flex", justifyContent: "center", alignItems: "center",
                        margin: "5px 10px",
                    }}>
                        <img style={{ height: "50px", width: "50px", borderRadius: "50%" }} src={mallInfo.userIcon} alt={mallInfo.userIcon} />
                    </button>

                    {/* メッセージの種類と送信者 */}
                    <div style={{
                        height: "60px", width: "210px",
                        fontSize: "16px", color: "white",
                        display: "flex", margin: "0px -10px",
                        textAlign: "center", justifyContent: "center", alignItems: "center",
                    }}>
                        {mallInfo.mallType} from "{mallInfo.user}"
                    </div>

                    {/* メッセージ削除ボタン */}
                    <button style={{
                        height: "50px", width: "20px",
                        border: "none", backgroundColor: "black",
                        display: "flex", justifyContent: "center", alignItems: "center",
                        margin: "5px 10px",
                    }}>
                        {/* ここに削除ボタンのイメージを追加 */}
                        <img src="" alt="" />
                    </button>
                </div>

                {/* メッセージ本文 */}
                <button style={{
                    height: "100px", width: "300px",
                    border: "none", backgroundColor: "black",
                    display: "flex", justifyContent: "center", alignItems: "center",
                }}>
                    <div style={{ color: "white" }}>
                        {mallInfo.content}
                    </div>
                </button>
            </div>

            {/* 水平ライン */}
            <img style={{
                height: "10px", width: "260px",
                display: "flex", margin: "0px 20px",
            }} src="/line.png" alt="line.png" />
        </div>
    )
}

export default Mall;
