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
		'الْحَمْدُ لِلَّهِ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ.',
		'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ',
		'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ، سُبْحَانَ اللَّهِ الْعَظِيمِ',
		'الْحَمْدُ للّهِ رَبِّ الْعَالَمِينَ',
		''
	];



	let disposable = vscode.commands.registerCommand('adhkari.adhkari', async () => {

        const intervalResponse = await vscode.window.showInputBox({
            prompt: "Please choose an intervel to recive a dhiker in seconds (ex: every 60seconds)",
            value: "60", // Default value
            validateInput: (value: string) => {
                if (!/^\d+$/.test(value) || parseInt(value) <= 0) {
                    return "Please enter a valid positive integer.";
                }
                return null;
            }
        });

        if (!intervalResponse) {
            return; // User canceled the input
        }

        const durationResponse = await vscode.window.showInputBox({
            prompt: "Please choose an time to stop reciving dhiker in minutes (ex: stop after 10 minute)",
            value: "10", // Default value
            validateInput: (value: string) => {
                if (!/^\d+$/.test(value) || parseInt(value) <= 0) {
                    return "Please enter a valid positive integer.";
                }
                return null;
            }
        });

        if (!durationResponse) {
            return; // User canceled the input
        }

		const intervalInSeconds: number = parseInt(intervalResponse);
        const durationInMinutes: number = parseInt(durationResponse);

        let dhiker = adhkar[Math.floor(Math.random() * adhkar.length)];

		      

        vscode.window.showInformationMessage(dhiker);

        let myInterval = setInterval(() => {
            dhiker = adhkar[Math.floor(Math.random() * adhkar.length)];
            vscode.window.showInformationMessage(dhiker);
        }, intervalInSeconds * 1000);

        setTimeout(() => {
            clearInterval(myInterval);
        }, durationInMinutes * 60 * 1000);

    });

	
	let dhiker = adhkar[Math.floor(Math.random() * 10)];

	
	



	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
