/**
 * Mini cli helper for aurelia-interactjs plugin
 * - Configures bundle correctly
 *
 * It's pure ES6 to support Babel/Typescript projects as well
 *
 * Usage:
 * au interact [--bundle <custom-bundle-filename.js>] [--force]
 */

import * as fs from 'fs-extra';
import * as project from '../aurelia.json';
import {CLIOptions} from 'aurelia-cli';

/**
 * Simple wrapper for built-in CLIOptions
 *
 * @param name
 * @param shortcut
 * @returns {any|null}
 */
let getParam = (name, shortcut) => {
  if (CLIOptions.hasFlag(name, shortcut)) {
    return CLIOptions.getFlagValue(name, shortcut) || null;
  }
};

/**
 * Gets all given options in a single array
 *
 * @return object
 */
let getOptions = () => {
  let options = {};
  options.plugin = getParam('plugin', 'p') || 'aurelia-interactjs';
  options.bundle = getParam('bundle', 'b');
  options.force = CLIOptions.hasFlag('force', 'f');

  return options;
};

// collect given parameters
let cliParams = getOptions();

/**
 * Gets pre-configured array of dependencies
 *
 * @return {Promise|Promise<Array<any>>}
 */
let getDependencies = (pluginName) => {
  return new Promise((resolve, reject) => {
    let path = `./node_modules/${pluginName}/install/dependencies.json`;
    fs.exists(path, exists => {
      if (exists !== true) {
        reject(`Could not open file: ${path}`);
      } else {
        fs.readJson(path, (err, contents) => {
          if (err) {
            reject(err);
          } else {
            resolve(contents);
          }
        });
      }
    });
  });
};

/**
 * Configures plugin dependencies
 * Edits aurelia.json to add pre-configured dependencies for aurelia-interactjs package
 *
 * @void
 */
let configure = (deps) => {
  let bundle = null,
    bundles = project.build.bundles;

  if (bundles.length === 0) {
    throw new Error("aurelia.json: bundles section is missing.");
  }

  let bundleName = cliParams.bundle || 'vendor-bundle.js';

  bundle = bundles.find(item => item.name === bundleName);

  if (!bundle) {
    console.log(`[INFO] Bundle '${bundleName}' could not be found. Looking for default bundles...`);

    // There are 2 sections by default, second is usually the vendor-bundle.js
    // Although, some developers prefer to merge everything into a single bundle
    let index = bundles.length > 1 ? 1 : 0;
    bundle = bundles[index];

    // this should not be reached ever, but never say never :)
    if (!bundle) {
      throw new Error('Default bundle could not be found either. Check aurelia.json configuration.');
    }

    bundleName = bundle.name;
  }

  if (!bundle.dependencies) {
    bundle.dependencies = [];
  }

  console.log(`[INFO] Bundle found: ${bundle.name}. Configuring new dependencies in aurelia.json for ${bundleName}...`);
  for (let dep of deps) {
    let name = dep.name || dep,
      check = bundle.dependencies.find(item => (item.name || item) === name);

    if (!check) {
      console.log(`[NEW] Package '${name}' has been configured.`);
      bundle.dependencies.push(dep);
    } else {
      if (cliParams.force) {
        let i = bundle.dependencies.indexOf(check);
        bundle.dependencies[i] = dep;
        console.log(`[MOD] Package '${name}' has been configured.`);
      } else {
        console.log(`[SKIP] Package '${name}' has already been configured.`);
      }
    }
  }

  console.log('[INFO] Saving changes to aurelia.json file...');
  let aureliaProjectFile = 'aurelia_project/aurelia.json';

  fs.copy(aureliaProjectFile, aureliaProjectFile + '.bak', function (err) {
    if (err) {
      console.log('[ERROR] An error occurred while duplicating aurelia.json.', err);
    } else {
      console.log('[INFO] Backup of aurelia.json has been created.');
      fs.writeJson(aureliaProjectFile, project, (err) => {
        if (err) {
          console.log('[ERROR] An error occurred while updating aurelia.json.', err);
        } else {
          console.log('[OK] aurelia.json has been updated.');
          console.log(`\n\n[OK] aurelia-interactjs has been configured successfully.`);
        }
      });
    }
  });
};

/**
 * Execute
 */
export default () => {
  return getDependencies(cliParams.plugin)
    .then(deps => {
      configure(deps);
    })
    .catch(err => { throw new Error(err); });
};
