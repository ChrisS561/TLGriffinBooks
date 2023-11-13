import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

//TODO Make this responsive
export default function DateHomepage() {
	return (
		<div>
			<Box
				sx={{
					display: { xs: 'none', sm: 'flex' },
					height: { sm: 120, md: 170, lg: 200 },
					width: { sm: 120, md: 170, lg: 200 },
					backgroundColor: '#72320A',
					marginTop: { sm: -30, md: -35 },
					marginLeft: { sm: 5, md: 8, lg: 14, xl: 23 },
				}}
			>
				<Stack
					direction="column"
					sx={{ alignItems: 'center', margin: '0 auto', paddingTop: 3 }}
				>
					<Typography
						variant="h3"
						sx={{
							color: '#FFFFFF',
							textTransform: 'capitalize',
							fontWeight: 'bold',
							fontFamily: 'inter',
							letterSpacing: '3px',
							fontSize: { sm: 35, md: 48, lg: 60 },
						}}
					>
						DEC
					</Typography>
					<Typography
						variant="h3"
						sx={{
							color: '#FFFFFF',
							textTransform: 'capitalize',
							fontWeight: 'bold',
							fontFamily: 'inter',
							letterSpacing: '3px',
							fontSize: { sm: 35, md: 48, lg: 60 },
						}}
					>
						3
					</Typography>
				</Stack>
			</Box>
		</div>
	);
}
