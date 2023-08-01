import JishoAPI from '@andymenderunix/jisho-js';

const jisho_api = new JishoAPI();
jisho_api.getEntries('道具', true).then((results) => {
    console.log(results);
});
