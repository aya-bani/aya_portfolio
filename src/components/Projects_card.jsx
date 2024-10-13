import { useRef } from 'react';

const Projects_card = ({ videoSrc, title, description }) => {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0; 
        }
    };

    return (
        <div
            className="w-full max-w-[440px] mx-auto bg-white shadow-md rounded-lg   p-4" // Styling for card
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <video
                ref={videoRef}
                className="w-full h-auto rounded-lg mb-4" 
                src={videoSrc}
                muted
                loop
            />
            <div className="text-center"> 
                <h3 className="text-lg font-semibold text-[#555555] mb-1 ">{title}</h3> 
                <p className="text-gray-600">{description}</p> 
            </div>
        </div>
    );
}

export default Projects_card;
