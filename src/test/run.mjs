// Runner test headless (Node): foundation + infrastruttura. Exit 1 su fallimento.
// Uso: npm test  (nessun browser/IndexedDB necessari)
import { runAllTests } from './harness.js';
import { runInfraTests } from './infra.js';
import { runLocomotionTests } from './locomotion.js';
import { runInteractionTests } from './interactions.js';
import { runAudioTests } from './audio.js';
import { runInteriorTestsAsync } from './interiors.js';
import { runS9Tests } from './s9.js';

const foundation = await runAllTests();
const infra = runInfraTests();
const locomotion = runLocomotionTests();
const interactions = runInteractionTests();
const interiors = await runInteriorTestsAsync();
const audio = runAudioTests();
const s9 = runS9Tests();
const all = [...foundation.tests, ...infra.tests, ...locomotion.tests, ...interactions.tests, ...interiors.tests, ...audio.tests, ...s9.tests];
const failed = all.filter(t => !t.pass);
const summary = {
  total: all.length,
  passed: all.length - failed.length,
  failed: failed.length,
  suites: [foundation.suite, infra.suite, locomotion.suite, interactions.suite, interiors.suite, audio.suite, s9.suite],
  failures: failed.map(t => ({ name: t.name, detail: t.detail }))
};
console.log(JSON.stringify(summary, null, 1));
if (failed.length) {
  console.error(`\n${failed.length} test falliti:`);
  for (const t of failed) console.error(` - ${t.name}: ${t.detail}`);
  process.exit(1);
}
