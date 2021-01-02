export function ls(): void {
	Cmd('list');
}

export function cd(args: any[]) {
	if (!args[0]) {
		Cmd('list');
	} else if (args[0] == '/') {
		Cmd('cd Root');
	} else {
		Cmd('cd ' + args[0]);
	}
}
