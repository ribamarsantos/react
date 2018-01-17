import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import PortifolioPage from '../components/PortifolioPage';
import PortifolioItemPage from '../components/PortifolioItemPage';
import ContactPage from '../components/ContactPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
    <div>
      <Header />
      <Switch>
          <Route path="/"       component={HomePage} exact   />
          <Route path="/portifolio" component={PortifolioPage}  exact  />
          <Route path="/portifolio/:id"   component={PortifolioItemPage}  />
          <Route path="/contact"   component={ContactPage}  />
          <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;