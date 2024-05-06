import ModalVideo from 'react-modal-video';

const VideoModal = ({ isVideoOpen, setIsVideoOpen, videoId }) => {
  return (
    <ModalVideo channel='youtube' autoplay isOpen={isVideoOpen}
      videoId={videoId} onClose={() => setIsVideoOpen(false)} />
  );
};

export default VideoModal;
