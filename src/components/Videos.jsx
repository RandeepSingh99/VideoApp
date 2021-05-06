import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getVideos } from '../redux/action/Videos'
import HoverVideoPlayer from 'react-hover-video-player';
import ModalComp from './ModalComp'
import SearchAppBar from './SearchAppBar'
const Videos = () => {
    const dispatch = useDispatch();
    const videos = useSelector(state => state.videos.videos)
    const loading = useSelector(state => state.videos.loading)
    const error = useSelector(state => state.videos.error)
    const vData = videos?.videos;
    console.log(vData)
    const [openModal, setOpenModal] = useState(false)
    const [modalVideo, setModalVideo] = useState()
    const [modalDescription, setModalDescription] = useState()
    const [search, setSearch] = useState("")
    useEffect(() => {
        dispatch(getVideos())
    }, []);

    return (
        <>
            <SearchAppBar
                onChange={(e) => {
                    setSearch(e.target.value)
                    console.log(search)
                }}
            />
            {/* <Navbar
                onChange={(e) => {
                    console.log(e.target.value)
                }}
            /> */}
            <div className="row">
                {videos?.loading && <p>Loading...</p>}
                {vData?.filter((val, i) => {
                    if (search === "") {
                        return val;
                    } else if (val.description.toLowerCase().includes(search.toLowerCase())) {
                        return val
                    }
                    else if (val.description.toLowerCase().includes(search.toLowerCase())) {
                    }

                }).map((data, i) => {


                    return (
                        <div className="column" onClick={() => {
                            setOpenModal(true)
                            setModalVideo(data.assets.thumb_webm.url)
                            setModalDescription(data.description)
                            console.log(modalDescription)
                        }}>
                            <HoverVideoPlayer
                                key={data.id}
                                videoSrc={data.assets.thumb_webm.url}
                                pausedOverlay={
                                    <img src={data.assets.preview_jpg.url} alt="" />
                                }
                                loadingOverlay={
                                    <div className="loading-spinner-overlay" />
                                }

                            />

                            {<p>{data.description}</p>}
                        </div>
                    )
                })}

                {videos.length === 0 && !loading && <p>video not found</p>}
                {error && !loading && <p>{error}</p>}
                <ModalComp
                    clickToOpenModal={openModal}
                    discription={modalDescription}
                    video={modalVideo}
                    clickToCloseModal={() => {
                        setOpenModal(false);

                    }}
                />
            </div>
        </>
    )
}

export default Videos;
