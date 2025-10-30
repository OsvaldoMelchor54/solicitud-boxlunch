import Vue from 'vue'

export const eventBus = new Vue()

export const fetchFile = (event, regexFiles = /(\.jpg|\.jpeg|\.png)$/i) => {
  const [file] = event.target.files
  if (!file) {
    return
  }
  const re = regexFiles
  if (!re.exec(file.name)) {
    return null
  }
  return file
}
