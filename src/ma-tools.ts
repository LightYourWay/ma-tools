// make ma a globally avaliable variable
declare var ma: any;
ma = {};

// import cli and make cmds a globally avaliable subdomain of ma
import { cli } from './modules/cli';
ma.cli = cli;

// import utils and hooking them into the global ma-tools variable
import * as utils from './modules/utils';
ma.utils = utils;

// import ui and hooking them into the global ma-tools variable
import * as ui from './modules/ui';
ma.ui = ui;

// version functions
ma.tools_version = 'v0.1.3';
ma.version = () => {
	return 'MA3 ' + Version() + ' | ' + _VERSION + ' | MA Tools ' + ma.tools_version;
};

// ****************************************************************
// plugin load entry point
// ****************************************************************
function Load() {
	Echo(`ma-tools have been loaded...`);
	Echo(ma.version());
}

Load();

// ****************************************************************
// plugin main entry point
// ****************************************************************
function Main(display_handle: number, argument: any) {
	Printf(ma.version());
}

// ****************************************************************
// plugin exit cleanup entry point
// ****************************************************************
function Cleanup() {}

// ****************************************************************
// plugin execute entry point
// ****************************************************************
function Execute(Type: string, ...args: any[]) {}

export = [Main, Cleanup, Execute];
