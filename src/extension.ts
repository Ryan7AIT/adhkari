import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	const adhkar = [
		'سُبْحَانَ اللَّهِ , سُبْحَانَ اللَّهِ ,سُبْحَانَ اللَّهِ ',
		'الحمد الله, الحمد الله, الحمد الله',
		'  الْلَّهُ أَكْبَرُ ,  الْلَّهُ أَكْبَرُ ,  الْلَّهُ أَكْبَرُ ',
		'لا حول ولا قوة الا بالله',
		'لَا إِلَهَ إِلَّا اللَّه',
		'الْلَّهُم صَلِّ وَسَلِم وَبَارِك عَلَى سَيِّدِنَا مُحَمَّد',
		'استغفر الله',
		'سُبْحَانَ اللهِ العَظِيمِ وَبِحَمْدِهِ',
		'لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلُّ شَيْءِ قَدِيرِ. ',
		'الْحَمْدُ لِلَّهِ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ.'
	];

	let dhiker = adhkar[Math.floor(Math.random() * 10)];

	
	let disposable = vscode.commands.registerCommand('adhkari.adhkari', () => {
		
		vscode.window.showInformationMessage(dhiker);


		let  myInteval = setInterval(() => {
			let dhiker = adhkar[Math.floor(Math.random() * 10)];

			vscode.window.showInformationMessage(dhiker);
		}, 60000);


		setTimeout(() => {
			clearInterval(myInteval);
		},60000 * 10);

	});



	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
