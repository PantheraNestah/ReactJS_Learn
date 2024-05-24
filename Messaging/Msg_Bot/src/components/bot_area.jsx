
export default function BotArea() {

    return (
        <>
            <div className="section_bot col-md-3">
                <div className="laucher d-none">
                    <span className="d-flex justify-content-between">
                        <img src="/imgs/icons8-bot-48.png" width={"30px"} alt="bot"/>
                        <span>Chat</span>
                    </span>
                </div>
                <div className="section_bot_interface">
                    <div className="header d-flex align-items-center justify-content-between">
                        <h4 className="text-center col-9">PolluBot</h4>
                        <span className="me-3">-</span>
                    </div>
                    <div className="body col-10 mx-auto">
                        <div>
                            <span>Hi! I'm PolluBot, your personal air pollution assistant. How can I help you today?</span>
                        </div>
                    </div>
                    <div className="prompt_area pb-2">
                        <div className="mx-auto d-flex align-items-center justify-content-center">
                            <textarea name="user_prompt" id="user_prompt" placeholder="Type a question..."></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}