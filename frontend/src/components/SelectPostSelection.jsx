import { useEffect, useState } from "react";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
//Create a container that pullsup post data


function SelectPostSelection() {
  const [postData, setPostData] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  useEffect(() => {
    axios
      .get("/api/postdata/selectpost")
      .then((response) => {
        setPostData(response.data);
        console.log(postData);
      })
      .catch((error) => {
        console.log("Error fetching posts:", error);
      });
  }, []);
  const handleSelect = (postName) => {
    const post = postData.find((p) => p.postName === postName);
    console.log(`Selected Post data:`, post);
    setSelectedPost(post);
  };
  const postNameContent = postData.map((post) => {
    return (
      <SelectItem
        key={post.postName}
        value={post.postName}
        onSelect={() => handleSelect(post.postName)}
      >
        {post.postName}
      </SelectItem>
    );
  });

  return (
    <div>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a Post" />
        </SelectTrigger>
        <SelectContent>{postNameContent}</SelectContent>
      </Select>
      {selectedPost && (
        <div className="flex flex-col">
          <h1>{selectedPost.postName}</h1>
        </div>
      )}
    </div>
  );
}

export default SelectPostSelection;
