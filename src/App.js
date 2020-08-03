import React, { useState,useEffect } from 'react';
import VideoComponent from './Components/VideoComponent';
import db from "./firebase";
import "./App.css";
import {ReactComponent as ReactLogo} from './tiktok-logo.svg';
function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    // BEM
    <div className="app">
      <ReactLogo />
      <div className="app__video">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <VideoComponent
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;

// <VideoComponent url="https://v16m.tiktokcdn.com/ba494e12164201644be0a0c0ca4b95f4/5f2a60e4/video/tos/useast2a/tos-useast2a-ve-0068c002/4cab05c38bc247c7847622da9f2eacb8/?a=1233&br=2156&bt=1078&cr=0&cs=0&dr=0&ds=3&er=&l=202008030733560101902090844E066925&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=MzUzZjk2dXdrdjMzZjczM0ApZzM2aGQzM2Q3Nzs6ZGk7PGdmbWNebzBramdfLS02MTZzczJiNmJgNC0wMy0vMDA2X146Yw%3D%3D&vl=&vr="
//       channel="king.science"
//       description="123qwerty"
//       song="12345678qwertyuioasdfghjk"
//       likes={Number(12)}
//       messages="21"
//       share="1"
//        />
//       <VideoComponent url="https://v16m.tiktokcdn.com/6fa419ae8deefffe0ac4111d0b13f91d/5f2a60e4/video/tos/useast2a/tos-useast2a-pve-0068/016dde169c014f37a8fa922995450217/?a=1233&br=1080&bt=540&cr=0&cs=0&dr=0&ds=3&er=&l=202008030733560101902090844E066925&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=MzRrNDpwcG1kdjMzZDczM0ApNmU7aGVoODxmNzQ6ZjtkZWdkL2BrLmFoYF5fLS0uMTZzc2BjXi82NDRfMDVhYDVhLWM6Yw%3D%3D&vl=&vr="  />
//       <VideoComponent url="https://v16m.tiktokcdn.com/5ed3f96013bf5f9284987a494992e6b5/5f2a60e4/video/tos/useast2a/tos-useast2a-ve-0068c001/1c935648498945bea5a2c354a86e90cb/?a=1233&br=922&bt=461&cr=0&cs=0&dr=0&ds=3&er=&l=202008030733560101902090844E066925&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=amtxdGZsOmwzdTMzaDczM0ApaDY1OzNnPGVlNzVkPGk4OGcxY2dlNGE1bV5fLS1jMTZzczEvLmIyXi1iMi5gYGE0LjI6Yw%3D%3D&vl=&vr=" />
//       <VideoComponent url="https://v16m.tiktokcdn.com/62f37e9010df199bb60e2cc656e7c6fc/5f2a64fa/video/tos/useast2a/tos-useast2a-ve-0068c001/8bed3750251a416885d85d3f6c37bfde/?a=1233&br=1514&bt=757&cr=0&cs=0&dr=0&ds=3&er=&l=2020080307512201019020908415005A4D&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajhybzVzZ254djMzNjczM0ApMzNlaDg2M2U2NzhpPGRoO2cuNXNfcHAuLmJfLS01MTZzczNfYTA0NWFgNC0uX2FiMzI6Yw%3D%3D&vl=&vr=" />
//       <VideoComponent url="https://v16m.tiktokcdn.com/1f279c587e7563d88c391efacaadb83d/5f2a64fa/video/tos/useast2a/tos-useast2a-pve-0068/b1265d01287e429e963b6665b5cfd8d9/?a=1233&br=1018&bt=509&cr=0&cs=0&dr=0&ds=3&er=&l=2020080307512201019020908415005A4D&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=anF4cmhoZ2ZxdDMzOzczM0ApaGU2OzZpNmRnNzpnM2c3aWdjbGYuNmJjNjZfLS1hMTZzcy8yLzYuNjJgLjFhXzRiMC86Yw%3D%3D&vl=&vr=" />
//       <VideoComponent url="https://v16m.tiktokcdn.com/7a1c88a79b9de01641f396511aa24823/5f2a60e4/video/tos/useast2a/tos-useast2a-ve-0068c002/69ba84d687054a8aa6d2ee4ddb5447ef/?a=1233&br=558&bt=279&cr=0&cs=0&dr=0&ds=3&er=&l=202008030733560101902090844E066925&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M3ZoOXduZWx2czMzNzczM0ApPDQ7OjY3aDs8NzM5ZDxnaGdqY2ZuLy1gNG9fLS1jMTZzczAxMjFhNTMyYWEuMWJjXi46Yw%3D%3D&vl=&vr=" />
