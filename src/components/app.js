import React, { useEffect, useState } from "react";
import SearchBar from "./searchBar";
import youtube from "../api/youtube";
import VideoList from "./videoList";
import VideoDetail from "./videoDetail";
import useVideos from "../hooks/useVideos";
const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("cats");
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="nine wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="seven wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
