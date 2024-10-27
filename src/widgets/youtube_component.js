import ReactPlayer from "react-player/youtube";

const YoutubeComponent = ({link}) => {
    return <div className="youtube-component">
        <ReactPlayer url={link}/>
    </div>
}

export default YoutubeComponent;