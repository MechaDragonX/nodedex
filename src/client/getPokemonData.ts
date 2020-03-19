const format = (input): string => {
    let result: string[] = input.toLowerCase().split('-');;
    for(let i = 0; i < result.length; i++) {
        result[i] = result[i][0].toUpperCase() + result[i].slice(1); 
    }
    return result.join(' ');
};
const typeJP = (eng) => {
    let jap: string[] = new Array<string>();
    let types: Map<string, string> = new Map<string, string>([
        ['normal', 'ノーマル'],
        ['fire', 'ほのお'],
        ['water', 'みず'],
        ['grass', 'くさ'],
        ['electric', 'でんき'],
        ['ice', 'こおり'],
        ['fighting', 'かくとう'],
        ['poison', 'どく'],
        ['ground', 'じめん'],
        ['flying', 'ひこう'],
        ['psychic', 'エスパー'],
        ['bug', 'むし'],
        ['rock', 'いわ'],
        ['ghost', 'ゴースト'],
        ['dragon', 'ドラゴン'],
        ['dark', 'あく'],
        ['steel', 'はがね'],
        ['fairy', 'フェアリー'],
    ]);
    eng.forEach(function(item) {
        if(types.has(item.type.name))
            jap.push(types.get(item.type.name));
        else
            console.log('And unexpected error occurered! The type wasn\'t found!');
    });
    if(jap.length === 1)
        return jap[0];
    return jap;
};
const toFeetInches = (value: number): string => {
    let feet: number = value * 0.3281;
    let foot: number = parseInt(feet.toString());
    let inch: number = Math.round((feet - foot) * 12);

    return foot + '\'' + inch + '\"';
}

const toJapanese = () => {
    $('#title').text('No.' + general.id + '　' + species.names[1].name);
    $('#switch-label').text('英語（English）');
    $('#header').text('No.' + general.id + '　' + species.names[1].name);
    $('#genus').text(species.genera[1].genus);
    if (species.flavor_text_entries[0].language.name === 'zh-Hans')
        $('#flavor-text').text(species.flavor_text_entries[1].flavor_text);
    else
        $('#flavor-text').text(species.flavor_text_entries[0].flavor_text);
    let jpType = typeJP(general.types);
    if (typeof jpType === 'string')
        $('#type').text('タイプ：' + jpType);
    else
        $('#type').text('タイプ：' + jpType[0] + '、' + jpType[1]);
    $('#height').text('高さ：' + (general.height / 10) + ' m');
    $('#weight').text('重さ：' + (general.weight / 10) + ' kg');
}
const toEnglish = () => {
    $('#title').text('No. ' + general.id + ': ' + format(general.name));
    $('#switch-label').text('Japanese (日本語)');
    $('#header').text('No. ' + general.id + ': ' + format(general.name));
    $('#genus').text(species.genera[2].genus);
    if (species.flavor_text_entries[0].language.name === 'zh-Hans')
        $('#flavor-text').text(format(species.flavor_text_entries[2].flavor_text));
    else
        $('#flavor-text').text(format(species.flavor_text_entries[1].flavor_text));
    if (general.types.length === 1)
        $('#type').text('Type: ' + format(general.types[0].type.name));
    else
        $('#type').text('Types: ' + format(general.types[0].type.name) + ', ' + format(general.types[1].type.name));
    $('#height').text('Height: ' + (general.height / 10) + ' m / ' + toFeetInches(general.height));
    $('#weight').text('Weight: ' + (general.weight / 10) + ' kg / ' + ((general.weight * 0.2205).toFixed(1)) + ' lb');
}

import * as Pokedex from 'pokeapi-js-wrapper';
const dex = new Pokedex.Pokedex();  
let general, species;
let pokemon: string = window.location.pathname.slice(10);

$(document).ready(async function() {
    try {
        general = await dex.getPokemonByName(pokemon);
    } catch(e) {
        console.log('ERROR: ', e);
    }
    try {
        species = await dex.getPokemonSpeciesByName(pokemon);
    } catch(e) {
        console.log('ERROR: ', e);
    }

    $('#switch').click(function() {
        if($(this).prop("checked")) {
            toJapanese();
        }
        else {
            toEnglish();
        }
    });
});
