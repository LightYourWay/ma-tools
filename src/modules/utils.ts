export function dump(o: any): string {
	if (type(o) === 'table') {
		let s = '{ ';
		for (let [k, v] of pairs(o)) {
			if (type(k) !== 'number') {
				k = '"' + (k as string) + '"';
			}
			s += '[' + (k as string) + '] = ' + dump(v) + ',';
		}
		return s + '} ';
	} else {
		return tostring(o);
	}
}
