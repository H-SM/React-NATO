import TrackPlayer, { Event , RepeatMode } from "react-native-track-player";

import { playListData } from "./src/constants";

//getting in all the tracks 
export async function setupPlayer() {
    let isSetup = false;
    try{
        await TrackPlayer.getCurrentTrack();
        isSetup = true;
    } catch (e){
        await TrackPlayer.setupPlayer();
    } finally {
        return isSetup;
    }
}

//add player data 
export async function addTrack() {
    await TrackPlayer.add(playListData);
    await TrackPlayer.setRepeatMode(RepeatMode.Queue); 
}
// all of the functoinality user wants
export async function playbackService() { 
    TrackPlayer.addEventListener(Event.RemotePause, () => {
        TrackPlayer.pause();
    });
    TrackPlayer.addEventListener(Event.RemotePlay, () => {
        TrackPlayer.play();
    });
    TrackPlayer.addEventListener(Event.RemoteNext, () => {
        TrackPlayer.skipToNext();
    });
    TrackPlayer.addEventListener(Event.RemotePrevious, () => {
        TrackPlayer.skipToPrevious();
    });
}