import ViewersDisney from '@assets/images/viewers-disney.png';
import ViewersPixar from '@assets/images/viewers-pixar.png';
import ViewersMarvel from '@assets/images/viewers-marvel.png';
import ViewersStarwars from '@assets/images/viewers-starwars.png';
import ViewersNational from '@assets/images/viewers-national.png';
import VideoDisney from '@assets/videos/disney.mp4';
import VideoPixar from '@assets/videos/pixar.mp4';
import VideoMarvel from '@assets/videos/marvel.mp4';
import VideoStarwars from '@assets/videos/star-war.mp4';
import VideoNational from '@assets/videos/national.mp4';

import * as Styled from './Viewers.styled';

type ItemType = {
    id: number;
    img: string;
    video: string;
};

const Viewers = () => {
    const items: ItemType[] = [
        { id: 1, img: ViewersDisney, video: VideoDisney },
        { id: 2, img: ViewersPixar, video: VideoPixar },
        { id: 3, img: ViewersMarvel, video: VideoMarvel },
        { id: 4, img: ViewersStarwars, video: VideoStarwars },
        { id: 5, img: ViewersNational, video: VideoNational },
    ];

    const handleMouseOver = (e: any) => {
        e.currentTarget.play();
    };
    const handleMouseOut = (e: any) => {
        e.currentTarget.pause();
    };

    return (
        <Styled.Container>
            {items.map((item) => {
                return (
                    <Styled.Wrap key={item.id}>
                        <img src={item.img} />
                        <Styled.Video
                            loop
                            preload="none"
                            muted
                            autoPlay
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                        >
                            <source
                                src={item.video}
                                type="video/mp4"
                            />
                        </Styled.Video>
                    </Styled.Wrap>
                );
            })}
        </Styled.Container>
    );
};

export default Viewers;
