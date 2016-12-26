// @flow
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'

const md = new MarkdownIt({
  html: true,
  typographer: true,
  linkify: true,
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch (__) {}
    }

    return ''
  }
})

function Textarea () {
  this.name = ''
  this.data = ''
  this.html = ''
}

/**
 * Process raw Markdown content into HTML
 */
Textarea.prototype.process = function () {
  this.html = md.render(this.data)
}

export default Textarea
