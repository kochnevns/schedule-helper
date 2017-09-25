export default function hook(path) {
  return `
  #!/bin/sh

  #получаем текущий коммит
  parent=\`git rev-parse --abbrev-ref HEAD\`;
  curdate=\`date +"%D %T"\`;

  echo "*****" >> ${path};
  echo $curdate >> ${path};
  echo $parent >> ${path};
  echo "*****" >> ${path};`
}
