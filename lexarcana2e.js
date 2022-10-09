import { lexarcana2e } from './module/config.js';
import LexArcana2ItemSheet from './module/sheets/LexArcana2ItemSheet.js';

Hooks.once('init', () => {
	console.log('lexarcana2e | Init Lex Arcana 2 edition system');

	CONFIG.lexarcana2e = lexarcana2e;

	Items.unregisterSheet('core', ItemSheet);
	Items.registerSheet('lexarcana2e', LexArcana2ItemSheet, {
		makeDefault: true,
	});
});
