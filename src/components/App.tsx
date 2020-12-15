import * as React from 'react';
// import { InteractiveLink } from './InteractiveLink';
import { Switch, Route } from 'react-router-dom';
// import { Home } from './Home';
// import { ExampleComponent } from './ExampleComponent';
// import { ExampleTwoDeepComponent } from './ExampleTwoDeepComponent';
// import { SitemapLinkGenerator } from './SitemapLinkGenerator';
// import { PageNotFound } from './PageNotFound';
import BDCake from './bd-cake/bdCake';
import Home from './home/home';
import Button from './components/button/button';
import Video from './video/video';
import BDCard from './bd-card/bdCard';
import './style.scss';

export const App: React.VFC = () => (
  <div className="root-container">
    <nav className="nav-bar">
      <Button toURL="/home" btnText="Home" />
      <Button toURL="/bdCake" btnText="Birthday Cake" />
      <Button toURL="/bdCard" btnText="Birthday Card" />
      <Button toURL="/fav-video" btnText="Your favourite video" />
    </nav>

    <Switch>
      <Route path="/" exact component={Home} />
      {/* <Home />
            </Route> */}
      <Route path="/bdCake" exact component={BDCake} />
      {/* <BDCake />
            </Route> */}
      <Route path="/bdCard" exact component={BDCard} />
      {/* <BDCard />
            </Route> */}
      <Route path="/fav-video" exact component={Video} />
      {/* <Video /> */}
      {/* </Route> */}
    </Switch>
    {/* <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/example" component={ExampleComponent} />
      <Route
        exact
        path="/example/two-deep"
        component={ExampleTwoDeepComponent}
      />
      <Route
        exact
        path="/sitemap-link-generator"
        component={SitemapLinkGenerator}
      />
      <Route component={PageNotFound} />
    </Switch> */}
  </div>
);
