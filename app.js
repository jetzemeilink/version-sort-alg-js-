const versionsDiv = document.getElementById('versions');

const versions = ['0.14', '2.22', '0.9', '1.11', '1-12', '1.9', '2', '2.5', '1.2', '4', '1.0'];

function splitVersion(versionString) {
  return versionString.split(/-|\.|_|,/);
}

function getHighest(arrayA, arrayB) {
  const arrayLength = Math.max(arrayA.length, arrayB.length);

  for (let i = 0; i <= arrayLength; i++) {
    const a = +arrayA[i] || 0;
    const b = +arrayB[i] || 0;
    
    if (a === b) {
      continue;
    }

    return a > b ? 1 : -1;
  }

  return 0;
}


const sortedVersions = versions.sort((a, b) => {
  const aSplitted = splitVersion(a);
  const bSplitted = splitVersion(b);

  return getHighest(aSplitted, bSplitted);
});

for (const version of sortedVersions) {
  const pTag = document.createElement('p');

  pTag.innerHTML = version;
  pTag.classList.add('version');
  
  versionsDiv.appendChild(pTag);
}