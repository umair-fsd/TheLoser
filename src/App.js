import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Home from "./Home";
import VideoUpload from "./VideoUpload";
import Articallist from "./Articallist";
import Articalslist from "./Articalslist";
import Sign from "./Sign";
import Artical from "./Artical";
import Creatnewaccount from "./Creatnewaccount";
import Articalupload from "./Articalupload";
import Videolist from "./Videolist";
import IntrestList from "./IntrestList";
import QuotesIntrestlist from "./QuotesIntrestlist";
import Bloggerslist from "./Bloggerslist";
import Bloggers from "./Bloggers";
import Videoslist from "./Videoslist";
import Header from "./Header";
import Footer from "./Footer";
import Videoscreen from "./Videoscreen";
import Updateprofile from "./Updateprofile";
import Profile from "./Profile";
import ArticalIntrestlist from "./ArticalIntrestlist";
import BloggersIntrestlist from "./BloggersIntrestlist";
import Uservideos from "./Uservideos";
import CookiePolicy from "./CookiePolicy";
import UserAritcles from "./UserAritcles";
import PrivacyPolicy from "./PrivacyPolicy";
import Gdpr from "./Gdpr";
import Quoteslist from "./Quoteslist";
import Quotes from "./Quotes";
import TermsandConditions from "./TermsandConditions";
import ActingAndModeling from "./ActingAndModeling";
import Uploadbloggers from "./Uploadbloggers";
import VideoIntrestlist from "./VideoIntrestlist";
import Uploadquotes from "./Uploadquotes";
import UploadModelingimages from "./UploadModelingimages";
import Followerslist from "./Followerslist";
import PropTypes from "prop-types";

class App extends React.Component {
  // componentDidMount() {
  //   $(document).ready(function () {
  //     $(document).bind("contextmenu", function (e) {
  //       e.preventDefault();
  //     });
  //     $(document).keydown(function (e) {
  //       if (e.which === 123) {
  //         return false;
  //       }
  //     });
  //   });
  // }
  render() {
    return (
      <Router>
        <div className="">
          <Switch>
            <Route path="/Updateprofile" component={Updateprofile} />
            <Route path="/Footer" component={Footer} />
            <Route path="/Videoscreen/:link" component={Videoscreen} />
            <Route
              path="/Header"
              component={Header}
              // render={() => <Header user={this.props.user} />}
            />
            <Route path="/Bloggers/:link" component={Bloggers} />
            <Route path="/Quotes/:link" component={Quotes} />
            <Route path="/Bloggerslist" component={Bloggerslist} />
            <Route
              path="/BloggersIntrestlist"
              component={BloggersIntrestlist}
            />
            <Route path="/QuotesIntrestlist" component={QuotesIntrestlist} />
            <Route
              path="/UploadModelingimages"
              component={UploadModelingimages}
            />
            <Route path="/ArticalIntrestlist" component={ArticalIntrestlist} />
            <Route path="/VideoIntrestlist" component={VideoIntrestlist} />
            <Route path="/Quoteslist" component={Quoteslist} />
            <Route path="/Uploadbloggers" component={Uploadbloggers} />
            <Route path="/Uploadquotes" component={Uploadquotes} />
            <Route path="/Videolist/:value" component={Videolist} />
            <Route path="/IntrestList/:value" component={IntrestList} />
            <Route path="/Videoslist/:value" component={Videoslist} />
            <Route path="/Articalupload" component={Articalupload} />
            <Route path="/Creatnewaccount" component={Creatnewaccount} />
            <Route path="/Artical/:link" component={Artical} />
            <Route path="/sign" component={Sign} />
            <Route path="/VideoUpload" component={VideoUpload} />
            <Route path="/Articallist/:value" component={Articallist} />
            <Route path="/Articalslist/:value" component={Articalslist} />
            <Route path="/Profile/:value" component={Profile} />
            <Route path="/TermsandConditions" component={TermsandConditions} />
            <Route path="/Gdpr" component={Gdpr} />
            <Route path="/Uservideos/:value" component={Uservideos} />
            <Route path="/UserAritcles/:value" component={UserAritcles} />
            <Route path="/ActingAndModeling" component={ActingAndModeling} />
            <Route path="/CookiePolicy" component={CookiePolicy} />
            <Route path="/PrivacyPolicy" component={PrivacyPolicy} />
            <Route path="/Followerslist/:value" component={Followerslist} />
            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object,
  errors: PropTypes.object,
};

export default App;
