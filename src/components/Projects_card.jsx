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
        <div className="w-full bg-white shadow-lg rounded-xl overflow-hidden card-hover">
            {/* Video */}
            <div className="w-full h-48 sm:h-64 lg:h-80 relative overflow-hidden">
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

            {/* Video Controls */}
            <div className="p-3 sm:p-4 bg-gray-50">
                <input
                    type="range"
                    min="0"
                    max={duration}
                    step="0.1"
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full cursor-pointer accent-gray-600 mb-3"
                />
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-700">
                    <button
                        onClick={togglePlayPause}
                        className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors font-medium"
                    >
                        {isPlaying ? 'Pause' : 'Play'}
                    </button>

                    <div className="flex items-center space-x-2">
                        <span className="text-xs sm:text-sm">{formatTime(currentTime)} / {formatTime(duration)}</span>
                        <label htmlFor="volume" className="text-xs">Vol</label>
                        <input
                            id="volume"
                            type="range"
                            min="0"
                            max="1"
                            step="0.05"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="w-16 sm:w-20 cursor-pointer accent-gray-600"
                        />
                    </div>

                    <button
                        onClick={handleFullscreen}
                        className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors font-medium"
                    >
                        Fullscreen
                    </button>
                </div>
            </div>

            {/* Project Info */}
            <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
        </div>
    );
};

export default Projects_card;
