import ModalVideo from 'react-modal-video'

const VideoModal = ({ isVideoOpen, setIsVideoOpen, videoId }: any) => {
  return (
    <ModalVideo
      channel='youtube'
      isOpen={isVideoOpen}
      videoId={videoId}
      onClose={() => setIsVideoOpen(false)}
    />
  )
}

export default VideoModal
