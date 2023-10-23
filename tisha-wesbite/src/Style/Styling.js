import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';

export const StyledToolbar = styled(Toolbar)(({ theme, toolbarColor }) => ({
	display: 'flex',
	alignItems: 'center',
	paddingTop: theme.spacing(1),
	paddingBottom: theme.spacing(2),
	backgroundColor: toolbarColor || '#E6E2DF',
	justifyContent: 'center',
	justifyItems: 'center',

	// Override media queries injected by theme.mixins.toolbar
	'@media all': {
		minHeight: 128,
	},
}));

