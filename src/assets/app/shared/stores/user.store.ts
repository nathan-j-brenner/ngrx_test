export const user = (state: any = [], {type, payload}) => {
	switch (type) {
		case 'REGISTER_USER':
			return [...state, payload];
		default:
			return state;
	}
}