/* global featureFile, scenarios, steps */
import Yadda from 'yadda';// eslint-disable-line import/no-extraneous-dependencies
import path from 'path';
import library from './steps';

Yadda.plugins.mocha.StepLevelPlugin.init();

new Yadda.FeatureFileSearch(path.resolve(__dirname, 'features')).each((file) => {
  featureFile(file, (feature) => {
    const yadda = Yadda.createInstance(library());
    scenarios(feature.scenarios, (scenario) => {
      steps(scenario.steps, (step, done) => {
        yadda.run(step, done);
      });
    });
  });
});

