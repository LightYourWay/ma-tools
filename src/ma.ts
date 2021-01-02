// make ma a globally avaliable variable
declare var ma: any;
ma = {};

// import cli and make cmds a globally avaliable subdomain of ma
import * as cli from './modules/cli';
declare var ls: () => void;
declare var cd: (args: any[]) => void;
ls = cli.ls;
cd = cli.cd;

// import utils and hooking them into the global ma-tools variable
import * as utils from './modules/utils';
ma.utils = utils;

// version functions
ma.tools_version = 'v0.1.3';
ma.version = () => {
	return 'MA3 ' + Version() + ' | ' + _VERSION + ' | MA Tools ' + ma.tools_version;
};

// ****************************************************************
// plugin main entry point
// ****************************************************************
function Main(display_handle: number, argument: any) {
	Printf('Hallo');
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
