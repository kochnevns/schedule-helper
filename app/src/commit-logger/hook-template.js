export default function hook(path) {
 let normalizedPath = path.replace(/\\/g, '/')
 let interpreter = /^win/.test(process.platform) ? '#!C:/Program\ Files/Git/usr/bin/sh.exe' : '#!/bin/sh'

  return `
  ${interpreter}

  #получаем текущий коммит
  parent=\`git rev-parse --abbrev-ref HEAD\`;
  curdate=\`date +"%D %T"\`;

  echo "*****" >> ${normalizedPath};
  echo $curdate >> ${normalizedPath};
  echo $parent >> ${normalizedPath};`
}
