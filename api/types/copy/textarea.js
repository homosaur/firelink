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

const Textarea = {
  name: '',
  data: '',
  html: '',
  process: function () {
    this.html = md.render(this.data)
  }
}

export default Textarea
