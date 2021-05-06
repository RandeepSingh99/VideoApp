import *as type from '../type'
export function getVideos(video) {
    return {
        type: type.GET_MOVIE_REQUSTED,
        payload: video,
    }
}
export function removeVideos() {
    return {
        type: type.REMOVE_MOVIE_DATA,
    }
}