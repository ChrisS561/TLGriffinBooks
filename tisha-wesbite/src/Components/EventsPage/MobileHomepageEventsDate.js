import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

export default function MobileHomepageEventsDate() {
	return (
		<div>
			<Box
				sx={{
					display: { xs: 'flex', sm: 'none' },
					height: 100,
					width: 270,
                    paddingLeft:"1rem"
					
				}}
			>
				<Stack
					direction="row"
                    spacing={2}
					sx={{ alignItems:'center', paddingTop: 3 }}
				>
					<Typography
						variant="h3"
						sx={{
							color: '#4E5865',
							textTransform: 'capitalize',
							fontWeight: 'bold',
							fontFamily: 'inter',
							letterSpacing: '3px',
							fontSize: 35,
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
							fontSize: 35,
						}}
					>
						29
					</Typography>
				</Stack>
			</Box>
		</div>
	);
}
