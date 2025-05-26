export const mockMenus = [
    {
        id: 1,
        name: '仪表盘',
        path: '/dashboard',
        icon: 'dashboard',
        order: 1,
    },
    {
        id: 2,
        name: '用户管理',
        path: '/users',
        icon: 'user',
        order: 2,
        children: [
            { id: 21, name: '用户列表', path: '/users/list', order: 1 },
            { id: 22, name: '用户详情', path: '/users/detail', order: 2 },
        ],
    },
    {
        id: 3,
        name: '菜单管理',
        path: '/menu',
        icon: 'menu',
        order: 3,
    },
    {
        id: 4,
        name: '日志管理',
        path: '/log',
        icon: 'file-text',
        order: 4,
    },
    {
        id: 5,
        name: '人员管理',
        path: '/personnel',
        icon: 'team',
        order: 5,
    },
    {
        id: 6,
        name: '设置',
        path: '/settings',
        icon: 'setting',
        order: 6,
    },
];

export const mockLogs = [
    {
        id: 1,
        type: '系统日志',
        action: '用户登录',
        user: 'admin',
        time: '2023-10-27 10:00:00',
    },
    {
        id: 2,
        type: '操作日志',
        action: '删除用户',
        user: 'editor',
        time: '2023-10-27 10:05:15',
    },
    // ...更多日志数据
];

export const mockPersonnel = [
    {
        id: 1,
        name: '张三',
        age: 28,
        gender: '男',
        department: '技术部',
        position: '工程师',
    },
    {
        id: 2,
        name: '李四',
        age: 24,
        gender: '女',
        department: '产品部',
        position: '产品经理',
    },
    // ...更多人员数据
]; 