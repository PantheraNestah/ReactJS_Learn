import React, {useState, useEffect, useRef} from "react"

export default function BotArea() {
    /* const [user_chats, setUserChats] = useState([]); */
    const [user_input, setUserInput] = useState("");
    const [AI_output, setAIOutput] = useState("");
    const [response_load, setResponseLoad] = useState("done");
    const [all_chats, setAllChats] = useState([]);
    const chatBodyRef = useRef(null);

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
                setAllChats([...all_chats, {type: "user", msg_text: trim_input}])
                if(trim_input) {
                    setResponseLoad("loading")
                    get_response(trim_input).then((resp) => {
                        console.log(resp);
                        resp = resp.AI_response
                        resp = resp.join("<br/>");
                        setAIOutput(resp);
                        setAllChats((prev) => [...prev, {type: "bot", msg_text: resp}]);
                        setUserInput("")
                        setResponseLoad("done")
                    });
                }
            }
        }
        document.getElementById("user_prompt").addEventListener("keydown", handleEnter);
        return () => {
            document.getElementById("user_prompt").removeEventListener("keydown", handleEnter);
        }
    }, [user_input]);

    const get_response = async (question) => {
        const resp_promise = await fetch(
            "http://localhost:8000/chatbot/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({"prompt":question})
            }
        );
        const resp_body = await resp_promise.json();
        return resp_body;
    }
    const handleChange = (e) => {
        setUserInput(e.target.value);
    }
    /* implement auto scrolling to the lattest child element in the .body element */
    useEffect(() => {
        const body = chatBodyRef.current;
        if (body) {
        body.scrollTo({
            top: body.scrollHeight,
            behavior: 'smooth'
        });
        }
    }, [all_chats, response_load]);
    
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
                    <div className="body col-11 ms-3 pe-4 pb-3" ref={chatBodyRef}>
                        <div className="eg_guide mb-3">
                            <Chat_item msg_text={"Hi! I'm PolluBot, your personal air pollution assistant. <br/>How can I help you today?"} type={"bot"} />
                        </div>
                        {all_chats.map((chat, index) => (
                            console.log(all_chats),
                            <Chat_item msg_text={chat.msg_text} type={chat.type} />
                        ))}
                        {response_load !== "done" &&
                            <div className="d-flex justify-content-start align-items-center ps-4 pb-3 mb-2">
                                <img src="/imgs/load_spinner2_darker.svg" alt="Loading..." width={"40px"} />
                            </div>
                        }
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

function Chat_item({msg_text, type}){
    return (
        (type === "user") ? (
            <div className="d-flex justify-content-end">
                <p className="user_chat bg-primary text-white p-2">{msg_text}</p>
            </div>
        ) : (
            <div className="d-flex justify-content-start align-items-end">
                <div className="d-flex align-items-end justify-content-end">
                    <img src="/imgs/bot_icon_animated.gif" width={"40px"} />
                </div>
                <p className="bot_chat bg-secondary text-white p-1" dangerouslySetInnerHTML={{ __html: msg_text }}></p>
            </div>
        )
    )
}