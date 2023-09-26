import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, Divider, Stack, Typography } from '@mui/material';
import SubscribeButton from '../SubscribeButtonDisplay/SubscribeButton';
import BooksButton from '../BooksDisplay/BooksButton';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	alignItems: 'flex-start',
	paddingTop: theme.spacing(1),
	paddingBottom: theme.spacing(2),
	backgroundColor: '#FAF9F8',
	// Override media queries injected by theme.mixins.toolbar
	'@media all': {
		minHeight: 128,
	},
}));

export default function Footer() {

	return (
		<Box>
			{/* TODO Add styling and center the elements on the footer */}
			<AppBar position="static">
				<StyledToolbar>
					<Stack direction="column">
						<Typography sx={{ color: 'black' }}>
							T.L Griffin
						</Typography>
						<Stack direction="row" spacing={2}>
							{/* TODO Fix the height of the buttons hover animation  */}
							<Button
								sx={{
									fontFamily: 'inter',
									color: '#4E5865',
									margin: '1rem',
								}}
								href="/About"
							>
								About
							</Button>
							<BooksButton />
							<Button
								sx={{
									fontFamily: 'inter',
									color: '#4E5865',
									margin: '1rem',
								}}
								href="/Events"
							>
								Events
							</Button>
							<SubscribeButton />
						</Stack>
						<Divider variant="fullWidth" />
						<Typography sx={{ color: 'black' }}>
							© {new Date().getFullYear()} Tisha Griffin. All Rights Reserved.
						</Typography>
					</Stack>
				</StyledToolbar>
			</AppBar>
		</Box>
	);
}
