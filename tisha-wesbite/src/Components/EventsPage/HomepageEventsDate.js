import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

export default function HomepageEventsDate() {
	return (
		<div>
			<Box
				sx={{
					display: { xs: 'none', sm: 'flex' },
					height: 200,
					width: 200,
					backgroundColor: '#C3D9DC',
					marginTop: -38,
					marginLeft: { lg: 14, xl: 23 },
				}}
			>
				<Stack
					direction="column"
					sx={{ alignItems: 'center', margin: '0 auto', paddingTop: 3 }}
				>
					<Typography
						variant="h3"
						sx={{
							color: '#4E5865',
							textTransform: 'capitalize',
							fontWeight: 'bold',
							fontFamily: 'inter',
							letterSpacing: '3px',
							fontSize: { sm: 48, lg: 60 },
						}}
					>
						OCT
					</Typography>
					<Typography
						variant="h3"
						sx={{
							color: '#4E5865',
							textTransform: 'capitalize',
							fontWeight: 'bold',
							fontFamily: 'inter',
							letterSpacing: '3px',
							fontSize: { sm: 48, lg: 60 },
						}}
					>
						24
					</Typography>
				</Stack>
			</Box>
		</div>
	);
}
