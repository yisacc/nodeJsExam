const permissions = [
    'create user',
    'view any user',
    'view user',
    'update user',
    'remove user',

    'create role',
    'view any role',
    'view role',
    'update role',
    'remove role',
    'create job',
    'delete job',
    'edit job',
]

const roles = {
    admin: [...permissions],
    user: [],
    manager: [
        'view any user',
        'view user',
        'view any role',
        'view role'
    ]
}

const users = [
    {
        username: 'admin',
        email: 'super@admin.com',
        password: 'superuser',
        roles: ['admin']
    }
]

module.exports = { permissions, roles, users }
