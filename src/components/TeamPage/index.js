import 'jquery/src/jquery';
import React, { PropTypes } from 'react'
import alex from '../images/Team_Alex.png';
import christian from '../images/Team_Christian.png';
import dawon from '../images/Team_Dawon.png';
import triangle from '../images/triangle.png';
import scroll from '../images/Contact/scrollup.png';
import './team.css';
import $ from 'jquery';
window.jQuery = $;


class team extends React.Component {

  constructor() {
    super();
    this.state = {
        intervalId: 0,
    };
  }
  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }
  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }

  // if ($('#back-to-top').length) {
  //   var scrollTrigger = 100, // px
  //       backToTop = function () {
  //           var scrollTop = $(window).scrollTop();
  //           if (scrollTop > scrollTrigger) {
  //               $('#back-to-top').addClass('show');
  //           } else {
  //               $('#back-to-top').removeClass('show');
  //           }
  //       };
  //   backToTop();
  //   $(window).on('scroll', function () {
  //       backToTop();
  //   });
  //   $('#back-to-top').on('click', function (e) {
  //       e.preventDefault();
  //       $('html,body').animate({
  //         scrollTop: 0
  //             }, 700);
  //         });
  //     }

//       $(scrollToTop() {
//    $('body').scrollTop(0);
// });

//   getInitialState() {
//   return {scrollTop: 0 };
// }
// componentWillMount() {
//   window.addEventListener('scroll', this.handleScroll);
// }
// componentWillUnmount() {
//   window.removeEventListener('scroll', this.handleScroll);
// }
// handleScroll() {
//    this.setState({scrollTop: $(window).scrollTop()});
// }
// scrollToTop() {
//   $(window).animate({scrollTop: 0}, this.props.duration);
// }
//   if(this.state.scrollTop < this.props.offset) {
//   return null;
// }
render() {
    return(
      <div>
        <div className='team-container'>

          <div className='team-box'>
            <div className='color'>
              <img src={triangle}/>
            </div>
            <div className='team-header'>
              <div className='header1'>MEET <span className='orange-team'>THE TEAM</span></div>
              <div className='adjuster'>
                <div className='line1'></div>
                <div className='line2'></div>
              </div>
              <div className='header2'>CREATIVE CONTENT CREATORS</div>
            </div>
            <div className='team-text'>Fox & Hound Studios was founded by three friends from across the world with one common desire, the want to create.

                                      We make our games because we believe in passion, emotion, and great stories. We make our games for ourselves, for each other, and most importantly, for you.

                                      We believe that beauty and creative expression lie in places where we wouldn’t think to look and we intend to sniff it out.

                                      Thank you for taking this journey with us.
                                      -F&H Studios
            </div>
          </div>

          <div className='box'>
            <div className='logo'>
              <img src={alex}/>
            </div>
            <div className='detail'>
              <div className='title'>
                <div className='name'>ALEX WANG</div>
                <div className='alex-line'></div>
              </div>
              <div className='creator'>DIRECTOR / WRITER</div>
              <div className='description'>
                Alex Wang is a young creative currently living in NYC.

                About life, among other things, he is passionately curious. Alex is obsessively and tirelessly trying to learning new things and attempting to cram the whole breadth of human existence into his humble mind. He believes in the power of empathy, of human kindness, and of wonderful storytelling.

                Alex is on a personal mission to create, along with the greatest team members in the world, to give himself an outlet before he bursts at the seams. He’s an utmost believer of individuality and creative expression.

              </div>
            </div>
          </div>

          <div className='box'>
            <div className='right-detail'>
              <div className='title'>
                <div className='christian-line'></div>
                <div className='name'>CHRISTIAN QUINONES</div>
              </div>
              <div className='creator'>COMPOSER / SOUND ENGINEER</div>
              <div className='right-description'>
                Christian Quinones grew up in a small town in Puerto Rico in a family with a passion for film. After long days of listening to “The Motorcycle Diaries” soundtrack and searching for hidden Latin-American musical treasures he was driven to study music composition. Eventually his projects expanded into composing classical music and working with diverse media projects.
              </div>
            </div>
            <div className='logo'>
              <img src={christian}/>
            </div>
          </div>

          <div className='box'>
            <div className='logo'>
              <img src={dawon}/>
            </div>
            <div className='detail'>
              <div className='title'>
                <div className='name'>DAWON KIM</div>
                <div className='dawon-line'></div>
              </div>
              <div className='creator'>ILLUSTRATOR / GRAPHIC DESIGNER</div>
              <div className='description'>
                Dawon Kim is an illustrator/graphic designer based in London.
                She has been working freelance with many studios and creative individuals to bring their ideas to life.

                Having to move abroad at an early age she became more comfortable expressing herself with visual means than verbal.
                Feelings, emotions and inner self, anything beyond words, she likes to lay out the intangibles on paper.

                Dawon is now ready to share her own unbounded perspective with the fantastic team members to showcase a unique vision that only Fox & Hound can exhibit.
              </div>
            </div>
          </div>

        </div>
        <div className='mobile-team-container'>
          <div className='intro'>
            <div className='shape'><img src={triangle}/></div>
            <div className='intro2'>
              <div className='meet'>MEET THE TEAM</div>
              <div className='content-creator'>CREATIVE CONTENT CREATORS</div>
            </div>
          </div>

          <div className='description-box'>Fox & Hound Studios was founded by three friends from across the world with one common desire, the want to create.
                                    We make our games because we believe in passion, emotion, and great stories. We make our games for ourselves, for each other, and most importantly, for you.
                                    We believe that beauty and creative expression lie in places where we wouldn’t think to look and we intend to sniff it out.
                                    Thank you for taking this journey with us.
                                    -F&H Studios
          </div>

          <div className='box'>
            <div className='logo'>
              <img src={alex}/>
            </div>
            <div className='detail'>
              <div className='title'>
                <div className='name'>ALEX WANG</div>
                <div className='alex-line'></div>
              </div>
              <div className='creator'>DIRECTOR / WRITER</div>
              <div className='description'>
                Alex Wang is a young creative currently living in NYC.
                About life, among other things, he is passionately curious. Alex is obsessively and tirelessly trying to learning new things and attempting to cram the whole breadth of human existence into his humble mind. He believes in the power of empathy, of human kindness, and of wonderful storytelling.
                Alex is on a personal mission to create, along with the greatest team members in the world, to give himself an outlet before he bursts at the seams. He’s an utmost believer of individuality and creative expression.
              </div>
            </div>
          </div>

          <div className='chris-box'>
            <div className='right-detail'>
              <div className='chris-title'>
                <div className='christian-line'></div>
                <div className='chris-name'>CHRISTIAN QUINONES</div>
              </div>
              <div className='creator'>COMPOSER / SOUND ENGINEER</div>
              <div className='right-description'>
                Christian Quinones grew up in a small town in Puerto Rico in a family with a passion for film. After long days of listening to “The Motorcycle Diaries” soundtrack and searching for hidden Latin-American musical treasures he was driven to study music composition. Eventually his projects expanded into composing classical music and working with diverse media projects.
              </div>
            </div>
            <div className='chris-logo'>
              <img src={christian}/>
            </div>
          </div>

          <div className='box'>
            <div className='logo'>
              <img src={dawon}/>
            </div>
            <div className='detail'>
              <div className='title'>
                <div className='name'>DAWON KIM</div>
                <div className='dawon-line'></div>
              </div>
              <div className='creator'>ILLUSTRATOR / GRAPHIC DESIGNER</div>
              <div className='description'>
                Dawon Kim is an illustrator/graphic designer based in London.
                She has been working freelance with many studios and creative individuals to bring their ideas to life.
                Having to move abroad at an early age she became more comfortable expressing herself with visual means than verbal.
                Feelings, emotions and inner self, anything beyond words, she likes to lay out the intangibles on paper.
                Dawon is now ready to share her own unbounded perspective with the fantastic team members to showcase a unique vision that only Fox & Hound can exhibit.
              </div>
            </div>
          </div>

          <div className='friendly-bar'></div>

          <div className='adventure-bar'>
            <input type="image" id="myBtn" onClick={ () => {this.scrollToTop(); }} src={scroll}/>


          </div>

        </div>
      </div>

    )
  }
}

export default team;
