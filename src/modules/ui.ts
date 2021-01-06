export function gotoSequ(display_handle: number, Sequ: number): void {
	let Sequence = Root().ShowData.DataPools.Default.Sequences[Sequ];
	if (Sequence && Sequence.GetClass() == 'Sequence') {
		let list = {} as ['str', string, number][];
		Sequence.Children().forEach((Cue) => {
			list.push(['str', Cue.Name, Cue.No]);
		});

		let [currentCue, preselectedItem] = Sequence.CurrentChild();
		if (currentCue) {
			preselectedItem = currentCue.Name;
		}
		let title = Sequence.Name;
		let [selectedIndex, selectedValue] = PopupInput(title, display_handle, list, preselectedItem);
		if (selectedIndex) {
			Cmd('Goto Sequence %i Cue %s', Sequence.Index(), selectedValue);
		} else {
			Echo('Goto canceled by user');
		}
	} else {
		Echo('Cannot perform goto, no sequence is selected');
	}
}
