import * as cli_import from './cli';

const cli: { [key: string]: Callable } = cli_import;

type Callable = (this: void, ...args: any[]) => any;

function dump(o: any): string {
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

export function cmd(): void {
	while (true) {
		let result = TextInput('CMD');
		let args = result.split(' ');
		let func = args.shift();
		Printf('Userinput: ' + result);
		Printf('function: ' + func);
		Printf('first argument: ' + args[1]);
		if (func) {
			Printf(tostring(func));
			Printf(dump(args));
			if (func == 'exit') return;
			cli[func](...args);
		}
	}
}
