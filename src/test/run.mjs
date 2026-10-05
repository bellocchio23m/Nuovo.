// Runner test headless (Node): foundation + infrastruttura. Exit 1 su fallimento.
// Uso: npm test  (nessun browser/IndexedDB necessari)
import { runAllTests } from './harness.js';
import { runInfraTests } from './infra.js';

const foundation = await runAllTests();
const infra = runInfraTests();
const all = [...foundation.tests, ...infra.tests];
const failed = all.filter(t => !t.pass);
const summary = {
  total: all.length,
  passed: all.length - failed.length,
  failed: failed.length,
  suites: [foundation.suite, infra.suite],
  failures: failed.map(t => ({ name: t.name, detail: t.detail }))
};
console.log(JSON.stringify(summary, null, 1));
if (failed.length) {
  console.error(`\n${failed.length} test falliti:`);
  for (const t of failed) console.error(` - ${t.name}: ${t.detail}`);
  process.exit(1);
}
