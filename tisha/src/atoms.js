import { atom } from 'recoil';

export const noUpcomingEventAtom = atom({
	key: 'noUpcomingEventAtom', // unique ID (with respect to other atoms/selectors)
	default: false, // default value (aka initial value)
});
