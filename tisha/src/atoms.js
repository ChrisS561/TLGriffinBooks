import { atom } from 'recoil';

export const noUpcomingEventAtom = atom({
	key: 'noUpcomingEventAtom', // unique ID (with respect to other atoms/selectors)
	default: true, // default value (aka initial value) Changes the dates on the homepage
});
