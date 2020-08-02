import React from 'react';
import VideoComponent from './Components/VideoComponent';
import "./App.css"
import {ReactComponent as ReactLogo} from './tiktok-logo.svg';

function App() {
  return (
    <div className="app">
      <ReactLogo />
    <div className="app__video">
      <VideoComponent url="https://v16m.tiktokcdn.com/2e9ffd3f6f9524fc11334a82526281df/5f29d2e2/video/tos/useast2a/tos-useast2a-ve-0068c004/9fb672911b304a909450819e9078f4e0/?a=1233&br=1744&bt=872&cr=0&cs=0&dr=0&ds=3&er=&l=202008022128020101901911633F0221C5&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2Y3Zjg8dHY0dDMzNjczM0ApODo7aDplZjtpNzY5aTo0NWcuNm1rZW5gb3BfLS1eMTZzczEyXy4tYS1eLzAuXjIwMzM6Yw%3D%3D&vl=&vr=" />
      <VideoComponent url="https://v16m.tiktokcdn.com/3fc581f141f1e0f51d9a8513cf49aa07/5f29d313/video/tos/useast2a/tos-useast2a-pve-0068/e93f25ef3d0d4375bf445d0bfafb6998/?a=1233&br=1936&bt=968&cr=0&cs=0&dr=0&ds=3&er=&l=202008022128510101890482204B043F5B&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2p2NDUzajszczMzNzczM0ApZjMzNzY8NTxpNzk5ZTdpZ2cxazNjNjVpNW9fLS1eMTZzc14uNC4vYzE2MWA0MDEvYGI6Yw%3D%3D&vl=&vr="  />
      <VideoComponent url="https://v16m.tiktokcdn.com/db33c8cf75316b102b695992c28980b6/5f29d37d/video/tos/useast2a/tos-useast2a-ve-0068c004/411d9dd7098342238eedf7fa9bff0f31/?a=1233&br=2562&bt=1281&cr=0&cs=0&dr=0&ds=3&er=&l=202008022130370101891941630704CAFD&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2R3PGhpPGd3dTMzZjczM0ApaGc4OjllZDw3Nzc5aWVpZGdnaGdxL2ZvLjRfLS0xMTZzc15gYjMuYi00MTY2YDQ0YF46Yw%3D%3D&vl=&vr=" />
      <VideoComponent url="https://v16m.tiktokcdn.com/2b4e72aca6c1a61016a52389d2138603/5f29d37d/video/tos/useast2a/tos-useast2a-pve-0068/269b4361308a4b0ba5049645579aa20c/?a=1233&br=3340&bt=1670&cr=0&cs=0&dr=0&ds=3&er=&l=202008022130370101891941630704CAFD&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=anlzNzUzaTg8dTMzOzczM0ApNjxkZDg6ZGQ3N2lkOjs7NGdocGNsYTY0azJfLS1hMTZzczAvYTYuLzNjMTNhYi4vNmI6Yw%3D%3D&vl=&vr=" />
      <VideoComponent url="https://v16m.tiktokcdn.com/d6d6ad1227bac14c3d85e516618eea99/5f29d37d/video/tos/useast2a/tos-useast2a-pve-0068/caf4197d633948ce9f161e8333a5b53f/?a=1233&br=3076&bt=1538&cr=0&cs=0&dr=0&ds=3&er=&l=202008022130370101891941630704CAFD&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=MzkzZDc0a3RtdTMzNjczM0ApNmlpM2Y6OWRmNzxmNWk7NGdgZW0tLW5eMS9fLS1eMTZzczU0MWNgNjMyYy1fLl9iYjE6Yw%3D%3D&vl=&vr=" />
      <VideoComponent url="https://v16m.tiktokcdn.com/082fc9297cb0c66b76cd2051d9cdc9d4/5f29d3ce/video/tos/useast2a/tos-useast2a-pve-0068/2fe736d0b67e41b2bd9cec60a462a9d4/?a=1233&br=2814&bt=1407&cr=0&cs=0&dr=0&ds=3&er=&l=202008022131580101901760400203E069&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=anBobHRucmU2dDMzNzczM0ApZjk8NWU5Mzs3N2RkN2c7O2czc24uMi4uMmpfLS1hMTZzcy81NjIvYmA1MS1gNjQ2YDU6Yw%3D%3D&vl=&vr=" />
      </div>
    </div>
  );
}

export default App;
