import Article from "./Article";
import ChatBot from "./Chatbot";

export default function Page({searchParams}){
    return(
        <div className="w-full flex">
            <div className="w-[70%] h-screen overflow-y-auto">
                <Article/>
            </div>
            <div className="w-[30%] ">
                <ChatBot/>
            </div>
        </div>
    )
}