import { useEffect, useState } from "react";
import { fetchVideosFromS3 } from "../../../../../services/awsS3Service";
import VideoGridList from "./VideoGridList";
import Pagination from "../../../../../components/Pagination";
import { Clock, MoreHorizontal } from "lucide-react";

const VideoGalleryList = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const videoUrls = await fetchVideosFromS3();
        setVideos(videoUrls);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadVideos();
  }, []);

  if (loading) return <div>Loading videos...</div>;
  if (error) return <div>Error loading videos: {error}</div>;
  // console.log(videos);

  
    
  return (
  <>
    <div className="mx-10 shadow-xl rounded-md bg-white mb-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {videos.length > 0 ? (
          videos.map((url, i) => {
            const filename = url.split('/').pop().replace('.mp4', '').replace('_small', '');

            const timestamp = new Date(Date.now() - i * 3600000)
              .toLocaleString("my-MM", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
              })
              .replace(/(\d+)\/(\d+)\/(\d+)/, "$3.$2.$1");

            return (
              <div key={i}>
                <div className="aspect-[3/2] w-full flex items-center justify-center px-3">
                  <VideoGridList url={url} />
                </div>
                <div className="px-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold">{filename}</h4>
                    <MoreHorizontal className="w-5 h-5 text-gray-600" />
                  </div>
                  <span className="flex gap-3 pt-3">
                    <Clock className="size-4" />
                    <p className="text-xs text-gray-500">{timestamp}</p>
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <p className="px-6 py-3 text-gray-500 col-span-full text-center">No Videos Found</p>
        )}
      </div>
      <div className="my-8">
        <Pagination />
      </div>
    </div>
  </>
);

  
};

export default VideoGalleryList;
