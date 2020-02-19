const users = [
    {
        id: '1006',
        name: 'Scott',
        friends: ['1007', '1008', '1009'],
        avatarUrl: 'https://ca.slack-edge.com/T045DMA9Q-UB51MD3C0-956223595324-512'
    },
    {
        id: '1007',
        name: 'Richard',
        friends: ['1006', '1008', '1009'],
        avatarUrl: 'https://ca.slack-edge.com/T045DMA9Q-U9X86JLFL-e419fbb8ca67-512' 
    },
    {
        id: '1008',
        name: 'DanielTC',
        friends: ['1006', '1007', '1009'],
        avatarUrl: 'https://ca.slack-edge.com/T045DMA9Q-UH2KSPAE9-5f668cbc512f-512' 
    },
    {
        id: '1009',
        name: 'Sadnan',
        friends: ['1006', '1008', '1007'],
        avatarUrl: 'https://ca.slack-edge.com/T045DMA9Q-U614C2NSY-b7ff28d1b0b1-512' 
    },
    {
        id: '1010',
        name: 'Manny',
        friends: ['1011', '1012', '1013'],
        avatarUrl: 'https://ca.slack-edge.com/T045DMA9Q-USH0D0YTV-9507ea44f87e-512' 
    },
    {
        id: '1011',
        name: 'Shai',
        friends: ['1010', '1012', '1013'],
        avatarUrl: 'https://ca.slack-edge.com/T045DMA9Q-USU6HHR46-d9a151e7e12d-512' 
    },
    {
        id: '1012',
        name: 'Jeremiah',
        friends: ['1011', '1010', '1013'],
        avatarUrl: 'https://ca.slack-edge.com/T045DMA9Q-USGTB2FJ7-gb4ad99b961b-512' 
    },
    {
        id: '1013',
        name: 'Myra',
        friends: ['1011', '1012', '1010'],
        avatarUrl: 'https://ca.slack-edge.com/T045DMA9Q-US94J6602-272875b033c3-512' 
    },
    {
        id: '1014',
        name: 'Daniel',
        friends: ['1015', '1016', '1017'],
        avatarUrl: 'https://ca.slack-edge.com/T045DMA9Q-US8QX55DY-8dab9abc091a-512' 
    },
    {
        id: '1015',
        name: 'Andrew',
        friends: ['1014', '1016', '1017'],
        avatarUrl: 'https://ca.slack-edge.com/T045DMA9Q-USLL9RA2C-26ab55cfff60-512' 
    },
    {
        id: '1016',
        name: 'Dan',
        friends: ['1014', '1015', '1017'],
        avatarUrl: 'https://ca.slack-edge.com/T045DMA9Q-USVRK1KPA-c636765ac0c0-512' 
    },
    {
        id: '1017',
        name: 'Harrison',
        friends: ['1014', '1015', '1016'],
        avatarUrl: 'https://ca.slack-edge.com/T045DMA9Q-USM5VUN5Q-86fedb44436b-512' 
    },
    {
        id: '1018',
        name: 'Paolo',
        friends: ['1019', '1020', '1021'],
        avatarUrl: 'https://ca.slack-edge.com/T045DMA9Q-USM7GPFJ5-695b7cb79603-512' 
    },
    {
        id: '1019',
        name: 'Jean-Loup',
        friends: ['1018', '1020', '1021'],
        avatarUrl: 'https://ca.slack-edge.com/T045DMA9Q-USUB5AKLG-01ce852d4653-512' 
    },
    {
        id: '1020',
        name: 'Angelo',
        friends: ['1019', '1018', '1021'],
        avatarUrl: 'https://ca.slack-edge.com/T045DMA9Q-USG6GL1A7-b191a10211c3-512' 
    },
    {
        id: '1021',
        name: 'Charles',
        friends: ['1019', '1020', '1018'],
        avatarUrl: 'https://ca.slack-edge.com/T045DMA9Q-USLA0QYF2-e553fc05565a-512' 
    },
    {
        id: '1022',
        name: 'Matteo',
        friends: ['1023', '1024', '1025'],
        avatarUrl: 'https://ca.slack-edge.com/T045DMA9Q-USARGUQ4B-c330f4233850-512' 
    },
    {
        id: '1023',
        name: 'Leonard',
        friends: ['1022', '1024', '1025'],
        avatarUrl: 'https://ca.slack-edge.com/T045DMA9Q-USTSP7NTA-0a29894e787c-512' 
    },
    {
        id: '1024',
        name: 'Maged',
        friends: ['1023', '1022', '1025'],
        avatarUrl: 'https://ca.slack-edge.com/T045DMA9Q-US7FARKMY-5d8e981e6321-512' 
    },
    {
        id: '1025',
        name: 'Craig',
        friends: ['1023', '1024', '1022'],
        avatarUrl: 'https://ca.slack-edge.com/T045DMA9Q-USTSP626L-c00988ad9e35-512' 
    },
    {
        id: '1026',
        name: 'Rony',
        friends: ['1027', '1028', '1029'],
        avatarUrl: 'https://ca.slack-edge.com/T045DMA9Q-USVQ978A3-e1696f4ed27a-512' 
    },
    {
        id: '1027',
        name: 'Peter',
        friends: ['1026', '1028', '1029'],
        avatarUrl: 'https://ca.slack-edge.com/T045DMA9Q-USF1HADPC-0d82083b5502-512' 
    },
    {
        id: '1028',
        name: 'Paul',
        friends: ['1027', '1026', '1029'],
        avatarUrl: 'https://ca.slack-edge.com/T045DMA9Q-USTJ68U92-73a3cd58f3d4-512' 
    },
    {
        id: '1029',
        name: 'Kendra',
        friends: ['1027', '1028', '1026'],
        avatarUrl: 'https://ca.slack-edge.com/T045DMA9Q-USVSW421J-ed364218a241-512' 
    },
    {
        id: '1030',
        name: 'Eric',
        friends: ['1031', '1032'],
        avatarUrl: 'https://ca.slack-edge.com/T045DMA9Q-USLQ533J9-66f0d3d45c67-512' 
    },
    {
        id: '1031',
        name: 'Dani',
        friends: ['1030', '1032'],
        avatarUrl: 'https://ca.slack-edge.com/T045DMA9Q-USM72NSDA-f5b37df5cd63-512' 
    },
    {
        id: '1032',
        name: 'Dominique',
        friends: ['1031', '1030'],
        avatarUrl: 'https://ca.slack-edge.com/T045DMA9Q-USHEPGK6V-0027789a0a23-512' 
    },
]

module.exports = { users };