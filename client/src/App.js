import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import login from './views/login';
import loginstaff from './views/loginstaff';
// Layouts
import LayoutDefault from './layouts/LayoutDefault';
import dashboard from './views/Dashboard'
// Views 
import Home from './views/Home';
import Attendance from './views/Attendance';
import Fees from './views/Fees';
import Marks from './views/Marks';
import timetable from './views/semtimetable';
import result from './views/semresult';
import hostelfee from './views/hostelfee';
import hostelallot from './views/hostel';
import staff from './views/staff'
// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/login" component={login}/>
          <AppRoute exact path="/dashboard" component={dashboard}/>
          <AppRoute exact path="/attendance" component={Attendance}/>
          <AppRoute exact path="/payment" component={Fees}/>
          <AppRoute exact path="/ca" component={Marks}/>
          <AppRoute exact path="/hostelallot" component={hostelallot}/>
          <AppRoute exact path="/timetable" component={timetable}/>
          <AppRoute exact path="/results" component={result}/>
          <AppRoute exact path="/hostelfee" component={hostelfee}/>
          <AppRoute exact path="/login1" component={loginstaff}/>
          <AppRoute exact path="/upload" component={staff}/>
        </Switch>
      )} />
  );
}

export default App;