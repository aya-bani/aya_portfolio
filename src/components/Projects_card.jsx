import { useRef, useState, useEffect } from 'react';

const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const Projects_card = ({ videoSrc, title, description ,blurryimg }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (videoRef.current) {
            videoRef.current.volume = newVolume;
        }
    };

    const handleFullscreen = () => {
        if (videoRef.current) {
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            } else if (videoRef.current.webkitRequestFullscreen) {
                videoRef.current.webkitRequestFullscreen();
            } else if (videoRef.current.mozRequestFullScreen) {
                videoRef.current.mozRequestFullScreen();
            } else if (videoRef.current.msRequestFullscreen) {
                videoRef.current.msRequestFullscreen();
            }
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
        }
    };

    const handleSeek = (e) => {
        const newTime = parseFloat(e.target.value);
        if (videoRef.current) {
            videoRef.current.currentTime = newTime;
            setCurrentTime(newTime);
        }
    };

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = volume;
        }
    }, [volume]);

    return (
        <div className="w-full max-w-[640px] mx-auto bg-white shadow-md rounded-lg p-4">
            {/* Video */}
                <div className="w-full max-w-[640px] h-[360px] rounded-lg mb-2 relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${blurryimg})`,
                        filter: 'blur(10px)',
                    }}
                />
                {/* Video layer */}
                <video
                    ref={videoRef}
                    className="w-full h-full object-contain relative z-10"
                    src={videoSrc}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                />
            </div>



            
            <div className="flex flex-col space-y-2 bg-gray-100 rounded p-3">
                <input
                    type="range"
                    min="0"
                    max={duration}
                    step="0.1"
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full cursor-pointer accent-[#555]"
                />
                <div className="flex items-center justify-between text-sm text-gray-700">
                    <button
                        onClick={togglePlayPause}
                        className="px-3 py-1 rounded bg-[#555] text-white hover:bg-[#444]"
                    >
                        {isPlaying ? 'Pause' : 'Play'}
                    </button>

                    <div className="flex items-center space-x-2">
                        <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
                        <label htmlFor="volume" className="text-xs">Vol</label>
                        <input
                            id="volume"
                            type="range"
                            min="0"
                            max="1"
                            step="0.05"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="w-20 cursor-pointer accent-[#555]"
                        />
                    </div>

                    <button
                        onClick={handleFullscreen}
                        className="px-3 py-1 rounded bg-[#555] text-white hover:bg-[#444]"
                    >
                        Fullscreen
                    </button>
                </div>
            </div>

            <div className="text-center mt-3">
                <h3 className="text-lg font-semibold text-[#555555] mb-1">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default Projects_card;
