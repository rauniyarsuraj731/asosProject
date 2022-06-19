import "./mens.css"
import { Link } from 'react-router-dom';

export const Menspage = () => {
    return (
        <div>
            
        <div id="mensmain">
            
         
            <div id="divimage6">
                <img id="image1" src="https://i.ibb.co/f1tgvdk/Whats-App-Image-2022-06-19-at-9-29-03-AM-1.jpg" srcset="" />
            </div>
            <div id="divimage2">
                <img id="image2" src="https://i.ibb.co/cg8xpzg/Whats-App-Image-2022-06-19-at-9-32-09-AM.jpg"  srcset="" />
            </div>
            <div id="fourpictures">
                
                <Link to="/polo"> <div class="mainbrand">
                    <img class="mainbrand1" src="https://content.asos-media.com/-/media/homepages/mw/2022/june/06/moments/mw_asos_design_festive_jewels_moment_870x1110.jpg" alt="" srcset="" />
                    <div>
                        <h5>ASOS WEEKLY COLLECTION </h5>
                        <p>Horse play</p>
                    </div>
                </div></Link>
                <Link to="/nike"> <div class="mainbrand">
                    <img class="mainbrand1" src="https://content.asos-media.com/-/media/homepages/mw/2022/june/06/moments/mw_au_footwear_moment_870x1110.jpg" alt="" srcset="" />
                    <div>
                        <h5>NIKE </h5>
                        <p>The retro collection</p>
                    </div>
                </div></Link>
                <Link to="/holiday">  <div class="mainbrand">
                    <img class="mainbrand1" src="https://content.asos-media.com/-/media/homepages/mw/2022/june/06/moments/mw_asos_design_skate_prints_moment_870x1110.jpg" alt="" srcset="" />
                    <div>
                        <h5>HOLIDAY PRINTS</h5>
                        <p>The stylish look</p>
                    </div>
                </div></Link>
                <Link to="/berghaus"> <div class="mainbrand">
                    <img class="mainbrand1" src="https://content.asos-media.com/-/media/homepages/mw/2022/june/06/moments/mw_hiit_moment_870x1110.jpg" alt="" srcset="" />
                    <div>
                        <h3>BERGHAUS</h3>
                        <p>The logo to know</p>
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
                    <img class="shopnowimage" src="https://content.asos-media.com/-/media/homepages/mw/2022/april/25/moments/mw_plain_shirts_moment_870x1110.jpg" alt="Plain Shirts" srcset="" />
                    <div class="shopnowtext">
                        <h2>SPRING SHIRTS</h2>
                        <p>Wavey looks</p>
                        <input className = "shop_now" type="button" value="SHOP NOW" />
                    </div>

                </div>
                <div class="shopnowdiv">
                    <img class="shopnowimage" src="https://content.asos-media.com/-/media/homepages/mw/2022/april/25/moments/mw_logos_unrvlld_moment_870x1110.jpg" alt="unrvlled moments" srcset="" />
                    <div class="shopnowtext"><h2>WORDS UP</h2>
                        <p>Ft.new ASOS Unrvlld Spply</p>
                        <input className = "shop_now" type="button" value="SHOP NOW" /></div>
                </div>
            </div>
            <div id="trend">
            <img src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/06_june/pride---banner-1---2022/uk/pride_hp_p1_final_dt_1258_150-v2-new.png" alt="" />
            </div>
            <div id="logoimg">
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/tommy-hilfiger-hp-logos-256x256.jpg" alt="" srcset="" />
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/north-face.png" alt="" srcset="" />
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/nike-hp-logos-256x256.jpg" alt="" srcset="" />
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/carhartt-hp-logos-256x256.jpg" alt="" srcset="" />
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/ellesse-hp-logos-256x256.jpg" alt="" srcset="" />
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/dr-martens-hp-logos-256x256.jpg" alt="" srcset="" />
            </div>
        </div>
        
        </div>
    );
};
