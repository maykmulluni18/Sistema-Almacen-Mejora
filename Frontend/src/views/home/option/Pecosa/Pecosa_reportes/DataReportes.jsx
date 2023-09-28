        
export const userColumns = [

    { field: 'id', headerName: 'PECOSA', width: 100 },
    {
        field: 'Responsble',
        headerName: 'Responsble',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 300,
        valueGetter: (params) =>
            `${params.row.usuario?.nombres + ' '}` +  
            `${params.row.usuario?.apellido_paterno + ' '}` + 
            `${params.row.usuario?.apellido_materno || ' '}`,
    },

    {
        field: 'Metas',
        headerName: 'Obra',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 800,
        valueGetter: (params) =>
            `${params.row.Meta?.obra || ''}`,
    },
    { field: 'fecha', headerName: 'Fecha de Pedido', width: 120 },


];