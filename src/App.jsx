import React             from 'react';
import Mozaik            from 'mozaik/browser';
import githubComponents  from 'mozaik-ext-github';
//import herokuComponents  from 'mozaik-ext-heroku';
import travisComponents  from 'mozaik-ext-travis';
import timeComponents    from 'mozaik-ext-time';
import weatherComponents from 'mozaik-ext-weather';


const MozaikComponent = Mozaik.Component.Mozaik;
const ConfigActions   = Mozaik.Actions.Config;


Mozaik.Registry.addExtensions({
    github:  githubComponents,
    //heroku:  herokuComponents,
    travis:  travisComponents,
    time:    timeComponents,
    weather: weatherComponents
});

React.render(<MozaikComponent/>, document.getElementById('mozaik'));

ConfigActions.loadConfig();