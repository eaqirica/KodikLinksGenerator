function generate(isClear) {

    const link = document.getElementById("link");
    const season = document.getElementById("season");
    const series = document.getElementById("series");
    const output = document.getElementById("output");
    const resultWrapper = document.getElementById("result-wrapper");

    if (isClear) {
        output.value = "";
        resultWrapper.classList.toggle("invisible")
        return;
    }

    const structure = {
        player: "",
        links: []
    }

    structure.player = "Kodik";

    let tmpSeries = [];
    for (let i = 0; i < series.value; i++) {
        tmpSeries[i] = {
            episode: i + 1,
            link: `${link.value}?season=${season.value}&episode=${i + 1}&only_episode=true`
        };
    }
    structure.links = tmpSeries;

    resultWrapper.classList.toggle("invisible");

    output.value = JSON.stringify(structure, null, "\t");
}

document.getElementById('generateBtn')
    .addEventListener('click', () => generate(false));
document.getElementById('generateCls')
    .addEventListener('click', () => generate(true));