/**
 * links.js v1 | https://github.com/xaoxuu/hexo-theme-stellar/
 */

'use strict';

module.exports = ctx => {
  var allLinks = {}
  var allLibraries = {}
  const data = ctx.locals.get('data')
  for (let key of Object.keys(data)) {
    console.log("key: ", key)
    if (key.startsWith('links/')) {
      let newKey = key.replace('links/', '')
      allLinks[newKey] = data[key]
    }
    if (key.startsWith('libraries/')) {
      let newKey = key.replace('libraries/', '')
      allLibraries[newKey] = data[key]
    }
  }
  ctx.theme.config.links = allLinks
  ctx.theme.config.libraries = allLibraries
}