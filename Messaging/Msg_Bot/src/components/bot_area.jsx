import React, {useState, useEffect} from "react"

export default function BotArea() {
    const [user_chats, setUserChats] = useState([]);
    const [user_input, setUserInput] = useState("");

    useEffect(() => {
        const laucher = document.querySelector(".laucher");
        const laucher_btn = document.querySelector(".laucher-btn");
        const section_bot_interface = document.querySelector(".section_bot_interface");
        const minimize_btn = document.querySelector(".chat-minimize");

        laucher_btn.addEventListener("click", () => {
            section_bot_interface.classList.remove("d-none");
            laucher.classList.replace("d-flex", "d-none");
        });
        minimize_btn.addEventListener("click", () => {
            section_bot_interface.classList.add("d-none");
            laucher.classList.replace("d-none", "d-flex");
        });
    }, []);

    useEffect(() => {
        const handleEnter = (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                const trim_input = user_input.trim();
                if(trim_input) {
                    const res = "I'm sorry, I don't understand that question. Please try again.";
                    setUserChats([...user_chats, {type: "user", msg_text: trim_input}, {type: "bot", msg_text: res}]);
                    setUserInput("");
                }
            }
        }
        document.getElementById("user_prompt").addEventListener("keydown", handleEnter);
        return () => {
            document.getElementById("user_prompt").removeEventListener("keydown", handleEnter);
        }
    }, [user_input]);

    const get_response = (question) => {
        const res = "I'm sorry, I don't understand that question. Please try again.";
        setUserChats([...user_chats, {type: "bot", msg_text: res}]);
        console.log(question);
    }
    const handleChange = (e) => {
        setUserInput(e.target.value);
    }
    /* implement auto scrolling to the lattest child element in the .body element */
    useEffect(() => {
        const body = document.querySelector(".body");
        body.scrollTop = body.scrollHeight;
    }, [user_chats]);
    
    return (
        <>
            <div className="section_bot col-md-3">
                <div className="laucher d-flex justify-content-end">
                    <span className="laucher-btn btn btn-outline-primary col-4 me-2 d-flex justify-content-center align-items-center border">
                        <img className="me-2" src="/imgs/icons8-bot-48.png" width={"50px"} alt="bot"/>
                        <span>Chat</span>
                    </span>
                </div>
                <div className="section_bot_interface d-none">
                    <div className="header d-flex align-items-center justify-content-between">
                        <h4 className="text-center col-9 d-flex align-items-center justify-content-center">PolluBot <img className="ms-2" src="/imgs/icons8-bot-48_3.png" width={"35px"} alt="bot"/></h4>
                        <span className="chat-minimize me-3">-</span>
                    </div>
                    <div className="body col-10 mx-auto">
                        <div className="eg_guide mb-3">
                            <span>Hi! I'm PolluBot, your personal air pollution assistant. How can I help you today?</span>
                        </div>
                        {user_chats.map((chat, index) => (
                            (chat.type === "user") ? (
                                console.log(chat.msg_text),
                                <div key={index} className="d-flex justify-content-end">
                                    <p className="user_chat bg-primary text-white p-2">{chat.msg_text}</p>
                                </div>
                            ) : (
                                <div key={index} className="d-flex justify-content-start">
                                    <p className="bot_chat bg-secondary text-white p-1">{chat.msg_text}</p>
                                </div>
                            )
                        ))}
                    </div>
                    <div className="prompt_area">
                        <div className="mx-auto col-md-10 d-flex align-items-center justify-content-center">
                            <textarea name="user_prompt" id="user_prompt" value={user_input} onChange={handleChange} placeholder="Type a question..."></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}