import './Content.scss';
import ContentAction from '../ContentAction';

export default function Content(){
    return (
        <div className="content__wrapper">
            <div className="countDown">
                Time: 00:40
            </div>
            <div className="paragraph">
            Neither golden eagles nor bald eagles are endangered species. 
            The US bald eagle population has more than quadrupled since 2009, from around 72,000 to 317,000 birds. 
            But the US golden eagle population is still relatively small – around 30,000 birds – and at risk of declining.
            </div>
            <div className="progress"></div>
            <div className="body">
                <div className="text">Done</div>
                <div className="button">
                    <div className="microphoneButton">
                    <i class="fa-solid fa-microphone"></i>   
                    </div>
                    <div className="tips">
                        <span className="tips__icon">
                        <i class="fa-solid fa-circle-exclamation"></i>
                        </span>
                        <span>Use a headset with inline microphone to get accurate AI scores</span>
                    </div>
                </div>
            </div>
            <audio src="" controls></audio>
            <p>AI Scoring and Audio Answer Download is available after submission.</p>
            <ContentAction />
        </div>
    )
}