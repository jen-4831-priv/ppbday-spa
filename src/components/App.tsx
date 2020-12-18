import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
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
      <Route path="/home" exact component={Home} />
      <Route path="/bdCake" exact component={BDCake} />
      <Route path="/bdCard" exact component={BDCard} />
      <Route path="/fav-video" exact component={Video} />
    </Switch>
  </div>
);
