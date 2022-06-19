import "./mens.css"
import { Link } from 'react-router-dom';

export const Womenspage = () => {
    return (
        <div>
            
        <div id="mensmain">
            
            <div id="divimage1">
                <img id="image1" src="https://i.ibb.co/f1tgvdk/Whats-App-Image-2022-06-19-at-9-29-03-AM-1.jpg" alt="discount image for womens page" srcset="" />
            </div>
            <div >
                <img id="image2" src="https://i.ibb.co/MNQsTK8/image.jpg" alt="Hero image" srcset="" />
            </div>
            <div id="fourpictures">
             
                <Link to="/women"> <div class="mainbrand">
                    <img class="mainbrand1" src="https://content.asos-media.com/-/media/homepages/ww/2022/june/06/moments/119158763_model_1-(1).jpg" alt="" srcset="" />
                    <div>
                        <h5>ASOS WEEKEND COLLECTIVE</h5>
                        <p>Sunday energy intensifies</p>
                    </div>
                </div></Link>
                <Link to="/dresses"> <div class="mainbrand">
                    <img class="mainbrand1" src="https://content.asos-media.com/-/media/homepages/ww/2022/june/06/moments/ww_glam_coords_moment_870x1110.jpg" alt="" srcset="" />
                    <div>
                        <h5>GLAM CO-ORDS</h5>
                        <p>Twin flames</p>
                    </div>
                </div></Link>
                <Link to="topshop">  <div class="mainbrand">
                    <img class="mainbrand1" src="https://content.asos-media.com/-/media/homepages/ww/2022/june/06/moments/220511_vk_asos_shot_04_310-(1).jpg" alt="" srcset="" />
                    <div>
                        <h5>TOPSHOP</h5>
                        <p>You wanna be on Top (shop)?</p>
                    </div>
                </div></Link>
                <Link to="highheels"> <div class="mainbrand">
                    <img class="mainbrand1" src="https://content.asos-media.com/-/media/homepages/ww/2022/june/06/moments/2022-03-17_ord-lb-serum-visual_v3.jpg" alt="" srcset="" />
                    <div>
                        <h5>THE ORDINARY</h5>
                        <p>Anything but</p>
                    </div>
                </div></Link>
            </div>
            <div id="banner2">
                <div id="bannerimage">
                    <img id="bannerimage2" src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/sale-lockups/sale/dt-white/215_40_dt_sale_white_uk_rosv2.png " alt="" />
                </div>
                <div id="bannertext">
                    <h1>UP TO 70% OFF , IT'S CALLED BIG</h1>
                    <h1>DISCOUNT ENERGY</h1>
                </div>
               
            </div>
            <div id="shopnow">
                <div class="shopnowdiv">
                    <img class="shopnowimage" src="https://content.asos-media.com/-/media/homepages/ww/2022/apr/25/moments/ww_drifters_swim_moment_870x1110.jpg" alt="" srcset="" />
                    <div class="shopnowtext">
                        <h2>SURF'S UP</h2>
                        <p>Seas the day</p>
                        <input className = "shop_now"type="button" value="SHOP NOW" />
                    </div>

                </div>
                <div class="shopnowdiv">
                    <img class="shopnowimage" src="https://content.asos-media.com/-/media/homepages/ww/2022/apr/25/moments/ww_gbl_asosluxedresses_moment_870x1110.jpg" alt="" srcset="" />
                    <div class="shopnowtext"><h2>ASOS LUXE</h2>
                        <p>The luxe life chose you</p>
                        <input className = "shop_now" type="button" value="SHOP NOW" /></div>
                </div>
            </div>
            <div id="trend">
               <img src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/06_june/pride---banner-1---2022/uk/pride_hp_p1_final_dt_1258_150-v2-new.png" alt="" />
            </div>
            <div id="logoimg">
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/monkl-hp-logos-256x256.jpg" alt="" srcset="" />
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/1x12x_200227170013.png" alt="" srcset="" />
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/collusion-hp-logos-256x256.jpg" alt="" srcset="" />
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/reclaimed-vintage-hp-logos-256x256.jpg" alt="" srcset="" />
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/1x12x.png" alt="" srcset="" />
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/weekday-hp-logos-256x256.jpg" alt="" srcset="" />
            </div>
        </div>
        
        </div>
    );
};