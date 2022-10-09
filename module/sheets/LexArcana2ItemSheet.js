export default class LexArcana2ItemSheet extends ItemSheet {
	get template() {
		return `systems/lexarcana2e/templates/sheets/${this.item.type}-sheet.hbs`;
	}

	getData() {
		const data = super.getData();
		data.config = CONFIG.lexarcana2e;

		console.log(data);
		return data;
	}
}
