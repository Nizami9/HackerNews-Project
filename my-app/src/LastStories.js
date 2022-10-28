import { useState, useEffect } from "react";
import axios from "axios";
import LastStoriesCard from "./components/LastSroriesCard";
import Navbar from "./Navbar";


function LastStories() {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalStories, setTotalStories] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "http://hn.algolia.com/api/v1/search?query=foo&tags=story"
        );
        const { hits, nbpages } = data;
        setStories(hits);
        setTotalStories(nbpages);
      } catch (err) {
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Latest Stories</h1>
      <div className="news-container">
        {isLoading ? (
          <p>is Loading....</p>
        ) : (
          stories.map((storie) => (
            <LastStories storie={storie} key={storie.objectID} />
          ))
        )}
      </div>
    </div>
  );
}

export default LastStories;