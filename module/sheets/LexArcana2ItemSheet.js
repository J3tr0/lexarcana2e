export default class LexArcana2ItemSheet extends ItemSheet {
	static get defaultOptions() {
		return mergeObject(super.defaultOptions, {
			width: 530,
			height: 180,
			classes: ['lexarcana2e', 'sheet', 'item'],
		});
	}

	get template() {
		return `systems/lexarcana2e/templates/sheets/${this.item.type}-sheet.hbs`;
	}

	getData() {
		const data = super.getData();
		data.config = CONFIG.lexarcana2e;

		// console.log(data);
		return data;
	}
}
