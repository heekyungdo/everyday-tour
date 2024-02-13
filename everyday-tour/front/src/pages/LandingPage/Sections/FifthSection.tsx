import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import YouTube, { YouTubeProps } from 'react-youtube';

const videos = [
    {id:1, country:'싱가포르', url:'https://www.youtube.com/watch?v=WCTNXq-T2qY&t=3s', title:'싱가포르 3박 5일 일정, 대신 짜드립니다', hash:'#싱가포르#해외여행#싱가포르맛집#싱가포르일정#싱가포르가서뭐하지?'},
    {id:2, country:'스페인', url:'https://www.youtube.com/watch?v=tHTuXBmyrag', title:'[#스페인][#에브리데이투어] 올 해는 스페인으로 가자', hash:'#스페인여행#스페인일정#에브리데이투어#해외여행#친구끼리해외여행'},
    {id:3, country:'홍콩', url:'https://www.youtube.com/watch?v=_NUBh3AFzrI&t=1s', title:'[#홍콩][#에브리데이투어] 금요일엔 퇴근하고 홍콩으로 가~자!', hash:'#홍콩여행#홍콩맛집#에브리데이투어#해외여행#금요일퇴근후홍콩'},
    {id:4, country:'다낭', url:'https://www.youtube.com/watch?v=VrlgV5UlmhM&t=1s', title:'3박5일 다낭 재미와 감성에 돌아버린 영상', hash:'#다낭#해외여행#에브리데이투어'},
    {id:5, country:'보라카이', url:'https://www.youtube.com/watch?v=A0G345wKrVM', title:'여기가 바로 액티비티 천국! 보라카이', hash:'#화이트비치#블루라군#말룸파티#보라카이여행#에브리데이투어'},
   
]
const FifthSection = () => {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
      
    const opts: YouTubeProps['opts'] = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

  return (
    <div>
        <div>
            <Title>EVERYDAY TOUR PLAY LIST</Title>
            <SubTitle>이 영상보면 여행 참기 힘들지 😆</SubTitle>
        </div>
        <div>
            <Swiper
               spaceBetween={10}
               slidesPerView={2.5}
               navigation={true}
               modules={[Navigation]}>
                {videos.map(video=>(
                <SwiperSlide key={video.id}>
                   <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onPlayerReady} />;
                    <p>{video.title}</p>
                    <p>{video.hash}</p>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>

    </div>
  )
}

export default FifthSection

const Title = styled.p`
    font-weight:900;
    font-size:30px;
    color:#82CBC4;
`
const SubTitle = styled.p`
    font-weight:800;
    font-size:20px;
`