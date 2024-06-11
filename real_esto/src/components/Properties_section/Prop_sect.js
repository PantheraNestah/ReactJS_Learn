import {register} from "swiper/element/bundle";
import "swiper/swiper-bundle.css";
import "./Prop_sect.scss";

register();

const Prop_sect = () => {

    return (
        <section className="section_properties">
            <div className="swiper_cont mx-auto col-lg-10">
                <div className="header d-flex flex-column ">
                    <span>Best Choices</span>
                    <span>Popular Properties</span>
                </div>
                <Control_btn />
                <swiper-container
                    slides-per-view="3"
                    navigation="true"
                    pagination="true"
                    space-between="20"
                    slidesOffsetBefore={20}
                    slidesOffsetAfter={20}
                    className="prop_swiper col-lg-8 mx-auto"
                >
                    <swiper-slide>
                        <div className="slide_cont">1</div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className="slide_cont">2</div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className="slide_cont">3</div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className="slide_cont">4</div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className="slide_cont">5</div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className="slide_cont">6</div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className="slide_cont">7</div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className="slide_cont">8</div>
                    </swiper-slide>
                </swiper-container>
            </div>
        </section>
    );
};

const Control_btn = () => {
    return (
        <div className="control_btns">
            <button className="prev_btn">&lt;</button>
            <button className="next_btn">&gt;</button>
        </div>
    );
};

export default Prop_sect;