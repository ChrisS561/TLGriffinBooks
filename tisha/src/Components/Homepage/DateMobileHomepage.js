import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

export default function DateMobileHomepage() {
	return (
		<div>
			<Box
				sx={{
					display: { xs: 'flex', sm: 'none' },
					height: 100,
					width: 270,
					paddingLeft: '1rem',
				}}
			>
				<Stack
					direction="row"
					spacing={2}
					sx={{ alignItems: 'center', paddingTop: 3 }}
				>
					<Typography
						variant="h3"
						sx={{
							color: '#72320A',
							textTransform: 'capitalize',
							fontWeight: 'bold',
							fontFamily: 'inter',
							letterSpacing: '3px',
							fontSize: 35,
						}}
					>
						May
					</Typography>
					<Typography
						variant="h3"
						sx={{
							color: '#72320A',
							textTransform: 'capitalize',
							fontWeight: 'bold',
							fontFamily: 'inter',
							letterSpacing: '3px',
							fontSize: 35,
						}}
					>
						25
					</Typography>
				</Stack>
			</Box>
		</div>
	);
}
