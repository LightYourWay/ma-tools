const { once } = require('events');
const { createInterface } = require('readline');
const fs = require('fs');

var filename = `dist/${process.env.npm_package_name}.lua`;
fs.readFile(filename, 'utf8', function (err, data) {
	if (err) {
		return console.log(err);
	}
	var result = data.replace(
		/function __TS__ArrayForEach(.+\n)+/g,
		`function __TS__ArrayForEach(arr, callbackFn)
	do
		local i = 0
		local arrLength = #arr
		while i < arrLength do
			if arr[i + 1] then
				callbackFn(_G, arr[i + 1], i, arr)
			else
				arrLength = arrLength + 1
			end
			i = i + 1
		end
	end
end\n`,
	);

	let license = [];

	(async function processLineByLine() {
		try {
			const rl = createInterface({
				input: fs.createReadStream('LICENSE'),
				crlfDelay: Infinity,
			});

			rl.on('line', (line) => {
				license.push(`-- ${line}`);
			});

			await once(rl, 'close');

			result = license.join(`\n`) + '\n' +
				result;

			fs.writeFile(filename, result, 'utf8', function (err) {
				if (err) return console.log(err);
			});
			fs.rename(`dist/${process.env.npm_package_name}.lua`, `dist/${process.env.npm_package_name}_v${process.env.npm_package_version}.lua`, function (err) {
				if (err) return console.log(err);
			});

			fs.writeFile(`dist/${process.env.npm_package_name}_v${process.env.npm_package_version}.xml`, `<?xml version="1.0" encoding="UTF-8"?>
<GMA3 DataVersion="1.4.0.2">
    <Plugin Name="${process.env.npm_package_name}" Version="${process.env.npm_package_version}">
        <ComponentLua Name="${process.env.npm_package_name}" FileName="${process.env.npm_package_name}_v${process.env.npm_package_version}.lua" ContentType="Automatic">
        </ComponentLua>
    </Plugin>
</GMA3>
`, `utf8`, function (err) {
				if (err) return console.log(err);
			})
		} catch (err) {
			console.error(err);
		}
	})();
});