import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopicOB from '../components/TopicOB';
import TopicR from '../components/TopicR';
import TopicRD from '../components/TopicRD';
class Home extends React.Component{
    render(){
      return(
          <main>
            <section class="hero body">
                <div class="container">
                    <div class="hero__slider ">
                        <div class="hero__items set-bg" style={{backgroundImage: "url(/assets/img/hero/hero-1.jpg)"}}>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="hero__text">
                                        <div class="label">Adventure</div>
                                        <h2>Fate / Stay Night: Unlimited Blade Works</h2>
                                        <p>After 30 days of travel across the world...</p>
                                        <a href="#"><span>Watch Now</span> <i class="fa fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="product-page spad">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="product__page__content">
                                    <div class="product__page__title">
                                        <div class="row">
                                            <div class="col-lg-8 col-md-8 col-sm-6">
                                                <div class="section-title">
                                                    <h4>Trending Now</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <TopicOB img={{backgroundImage: "url(/assets/img/popular/popular-1.jpg)"}} number="18" num="18" number3="11" view="9141" title="Active" title2="Movie" title3="Sen to Chihiro no Kamikakushi" />
                                        <TopicOB img={{backgroundImage: "url(/assets/img/popular/popular-2.jpg)"}} number="18" num="18" number3="11" view="9141" title="Active" title2="Movie" title3="Kizumonogatari III: Reiket su-hen" />
                                        <TopicOB img={{backgroundImage: "url(/assets/img/popular/popular-3.jpg)"}} number="18" num="18" number3="11" view="9141" title="Active" title2="Movie" title3="Shirogane Tamashii hen Kouhan sen" />
                                        <TopicOB img={{backgroundImage: "url(/assets/img/popular/popular-4.jpg)"}} number="18" num="18" number3="11" view="9141" title="Active" title2="Movie" title3="Rurouni Kenshin: Meiji Kenkaku Romantan" />
                                        <TopicOB img={{backgroundImage: "url(/assets/img/popular/popular-5.jpg)"}} number="18" num="18" number3="11" view="9141" title="Active" title2="Movie" title3="Mushishi Zoku Shou 2nd Season" />
                                        <TopicOB img={{backgroundImage: "url(/assets/img/popular/popular-6.jpg)"}} number="18" num="18" number3="11" view="9141" title="Active" title2="Movie" title3="Monogatari Series: Second Season" />
                                        <TopicOB img={{backgroundImage: "url(/assets/img/recent/recent-1.jpg)"}} number="18" num="18" number3="11" view="9141" title="Active" title2="Movie" title3="Great Teacher Onizuka" />
                                        <TopicOB img={{backgroundImage: "url(/assets/img/recent/recent-2.jpg)"}} number="18" num="18" number3="11" view="9141" title="Active" title2="Movie" title3="Fate/stay night Movie: Heaven's Feel - II. Lost" />
                                        <TopicOB img={{backgroundImage: "url(/assets/img/recent/recent-3.jpg)"}} number="18" num="18" number3="11" view="9141" title="Active" title2="Movie" title3="Mushishi Zoku Shou: Suzu no Shizuku" />
                                        <TopicOB img={{backgroundImage: "url(/assets/img/recent/recent-4.jpg)"}} number="18" num="18" number3="11" view="9141" title="Active" title2="Movie" title3="Fate/Zero 2nd Season" />
                                        <TopicOB img={{backgroundImage: "url(/assets/img/recent/recent-5.jpg)"}} number="18" num="18" number3="11" view="9141" title="Active" title2="Movie" title3="Kizumonogatari II: Nekket su-hen" />
                                        <TopicOB img={{backgroundImage: "url(/assets/img/recent/recent-6.jpg)"}} number="18" num="18" number3="11" view="9141" title="Active" title2="Movie" title3="The Seven Deadly Sins: Wrath of the Gods" />
                                        <TopicOB img={{backgroundImage: "url(/assets/img/trending/trend-1.jpg)"}} number="18" num="18" number3="11" view="9141" title="Active" title2="Movie" title3="The Seven Deadly Sins: Wrath of the Gods" />
                                        <TopicOB img={{backgroundImage: "url(/assets/img/trending/trend-2.jpg)"}} number="18" num="18" number3="11" view="9141" title="Active" title2="Movie" title3="Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien" />
                                        <TopicOB img={{backgroundImage: "url(/assets/img/trending/trend-3.jpg)"}} number="18" num="18" number3="11" view="9141" title="Active" title2="Movie" title3="Shingeki no Kyojin Season 3 Part 2" />
                                        <TopicOB img={{backgroundImage: "url(/assets/img/trending/trend-4.jpg)"}} number="18" num="18" number3="11" view="9141" title="Active" title2="Movie" title3="Fullmetal Alchemist: Brotherhood" />
                                        <TopicOB img={{backgroundImage: "url(/assets/img/trending/trend-5.jpg)"}} number="18" num="18" number3="11" view="9141" title="Active" title2="Movie" title3="Shiratorizawa Gakuen Koukou" />
                                        <TopicOB img={{backgroundImage: "url(/assets/img/trending/trend-6.jpg)"}} number="18" num="18" number3="11" view="9141" title="Active" title2="Movie" title3="Code Geass: Hangyaku no Lelouch R2" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-8">
                                <div class="product__sidebar">
                                    <div class="product__sidebar__view">
                                    <div class="section-title">
                                        <h5>Top Views</h5>
                                    </div>
                                    <ul class="filter__controls">
                                        <li class="active" data-filter="*">Day</li>
                                        <li data-filter=".week">Week</li>
                                        <li data-filter=".month">Month</li>
                                        <li data-filter=".years">Years</li>
                                    </ul>
                                        <div class="filter__gallery">
                                            <TopicR class="mix day years" img={{backgroundImage: "url(/assets/img/sidebar/tv-1.jpg)"}} number="18" num="?" view=" 9141" title="Boruto: Naruto next generations"/>
                                            <TopicR class="mix month week" img={{backgroundImage: "url(/assets/img/sidebar/tv-2.jpg)"}} number="18" num="?" view=" 9141" title="The Seven Deadly Sins: Wrath of the Gods"/>
                                            <TopicR class="mix week years" img={{backgroundImage: "url(/assets/img/sidebar/tv-3.jpg)"}} number="18" num="?" view=" 9141" title="Sword art online alicization war of underworld"/>
                                            <TopicR class="mix years month" img={{backgroundImage: "url(/assets/img/sidebar/tv-4.jpg)"}} number="18" num="?" view=" 9141" title="Fate/stay night: Heaven's Feel I. presage flower"/>
                                            <TopicR class="mix day" img={{backgroundImage: "url(/assets/img/sidebar/tv-5.jpg)"}} number="18" num="?" view=" 9141" title="Fate stay night unlimited blade works"/>
                    </div>
                </div>
                <div class="product__sidebar__comment">
                    <div class="section-title">
                        <h5>New Comment</h5>
                    </div>
                            <TopicRD img="./assets/img/sidebar/comment-1.jpg" title="Active" title2="Movie" title3="The Seven Deadly Sins: Wrath of the Gods" view="19.141" />
                            <TopicRD img="./assets/img/sidebar/comment-2.jpg" title="Active" title2="Movie" title3="Shirogane Tamashii hen Kouhan sen" view="19.141" />
                            <TopicRD img="./assets/img/sidebar/comment-3.jpg" title="Active" title2="Movie" title3="Kizumonogatari III: Reiket su-hen" view="19.141" />
                            <TopicRD img="./assets/img/sidebar/comment-4.jpg" title="Active" title2="Movie" title3="Monogatari Series: Second Season" view="19.141" />
                </div> 
            </div>
            </div>
            </div>
            </div>
            </section>
            </main>
      );
    }
}
export default Home;