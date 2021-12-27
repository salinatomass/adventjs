// Reto: https://adventjs.dev/challenges/18

function fixFiles(files) {
  const cacheFiles = {};

  const fixedFiles = files.map(file => {
    const exists = cacheFiles[file];
    if (!exists) {
      cacheFiles[file] = 1; // lo crea
      return file;
    }

    cacheFiles[file] += 1; // lo actualiza
    const num = cacheFiles[file] - 1;
    return `${file}(${num})`;
  });

  return fixedFiles;
}

// ______________________________________________________________________

fixFiles(['photo', 'postcard', 'photo', 'photo', 'video']); // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']
fixFiles(['file', 'file', 'file', 'game', 'game']); // ['file', 'file(1)', 'file(2)', 'game', 'game(1)']
fixFiles(['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']); // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']
