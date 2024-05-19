'use strict'

module.exports = ctx => function(args) {
  args = ctx.args.map(args, ['repo', 'api'], ['group'])

  console.log("group: ", args.group)

  var el = '<div class="tag-plugin library-wrap"><hr />'

  const libraries = ctx.theme.config.libraries || {}
  for (let item of (libraries[args.group] || [])) {
    if (item?.name) {
      el += `<div class="page">`
      el += `<div class="info">`
      if (item?.cover) {
        el += `<div class="image" title="${item.name}">`
        el += `<img src="${item.cover}" alt="${item.name}" />`
        el += `</div>`
      }
      el += `<div class="info-card">`
      if (item?.link) {
        el += `<h2>`
        el += `<a href="${item.link}" target="_blank">${item.name}</a>`
        el += `</h2>`
      } else {
        el += `<h2>${item.name}</h2>`
      }
      if (item?.badge) {
        el += `<span class="badge" style="display: inline-block">${item.badge}</span>`
      }
      if (item?.recommend) {
        el += `<p>推荐指数：${item.recommend}</p>`
      }
      if (item?.author) {
        el += `<h5><b>${item.author}</b></h5>`
      }
      if (item?.publisher) {
        el += `<h5><i>${item.publisher}`
        if (item?.year) {
          el += `，${item.year}`
        }
        el += `</i></h5>`
      }
      if (item?.isbn) {
        el += `<p>ISBN: ${item.isbn}</p>`
      }
      if (item?.description) {
        el += `<p class="text">${item.description}</p>`
      }
      el += `</div>`
      el += `</div>`
      el += `</div>`
      el += `<hr />`
    }
  }

  el += '</div>'
  return el
}
