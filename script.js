//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
    const bands = [
      "The Plot in You",
      "The Devil Wears Prada",
      "Pierce the Veil",
      "Norma Jean",
      "The Bled",
      "Say Anything",
      "The Midway State",
      "We Came as Romans",
      "Counterparts",
      "Oh, Sleeper",
      "A Skylit Drive",
      "Anywhere But Here",
      "An Old Dog"
    ];

    function strip(bandName) {
      return bandName.replace(/^(a |an |the )/i, "").trim();
    }

    const sortedBands = bands.sort((a, b) => strip(a).localeCompare(strip(b)));

    const bandsList = document.querySelector('#bands');
    if (bandsList) {
      bandsList.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
    }
  });