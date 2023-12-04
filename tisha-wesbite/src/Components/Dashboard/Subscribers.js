import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
	{ field: 'id', headerName: 'ID', width: 90 },
	{ field: 'firstName', headerName: 'First name', width: 150 },
	{ field: 'lastName', headerName: 'Last name', width: 150 },
	{
		field: 'email',
		headerName: 'Email',
		type: 'string',
		width: 200,
	},
];

const rows = [
	{ id: 1, lastName: 'Snow', firstName: 'Jon', email: 35 },
	{ id: 2, lastName: 'Lannister', firstName: 'Cersei', email: 42 },
	{ id: 3, lastName: 'Lannister', firstName: 'Jaime', email: 45 },
	{ id: 4, lastName: 'Stark', firstName: 'Arya', email: 16 },
	{ id: 5, lastName: 'Targaryen', firstName: 'Daenerys', email: null },
	{ id: 6, lastName: 'Melisandre', firstName: null, email: 150 },
	{ id: 7, lastName: 'Clifford', firstName: 'Ferrara', email: 44 },
	{ id: 8, lastName: 'Frances', firstName: 'Rossini', email: 36 },
	{ id: 9, lastName: 'Roxie', firstName: 'Harvey', email: 65 },
];

export default function Subscribers() {
	return (
		<div style={{ height: "100vh", width: '100%' }}>
			<DataGrid
				rows={rows}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: { page: 0, pageSize: 10 },
					},
				}}
				pageSizeOptions={[10, 20]}
			
			/>
		</div>
	);
}
