import Mock from 'mockjs' //导入mockjs
const userList = {
  //定义用户数据
  data: {
    total: 3,
    //前两个用户数据分别固定设为管理员和普通用户，为后续权限设置做准备，其他用户随机生成
    userinfo: [
      {
        username: 'admin',
        password: '123456',
        roles: 'admin',
        name: '张三',
        token: '000111222333444555666',
        id: '1',
        rights: [
          {
            id: 100,
            authName: '用户管理',
            children: [
              {
                id: 110,
                authName: '用户列表',
                path: 'users',
                rights: ['view', 'edit', 'add', 'delete'],
              },
            ],
          },
          {
            id: 101,
            authName: '角色管理',
            children: [
              {
                id: 111,
                authName: '角色列表',
                path: 'roles',
                rights: ['view', 'edit', 'add', 'delete'],
              },
            ],
          },
          {
            id: 102,
            authName: '商品管理',
            children: [
              {
                id: 112,
                authName: '商品列表',
                path: 'goods',
                rights: ['view', 'edit', 'add', 'delete'],
              },
              {
                id: 113,
                authName: '商品分类',
                path: 'categories',
                rights: ['view', 'edit', 'add', 'delete'],
              },
            ],
          },
        ],
      },
      {
        username: 'editor',
        password: '123456',
        roles: 'editor',
        name: '前端工程师',
        token: '145145145123123123111',
        id: '2',
      },
      {
        username: '@word(3, 5)',
        password: '123456',
        roles: 'editor',
        name: '@cname',
        token: '@guid()',
        id: '3',
      },
    ],
    meta: {
      status: 200,
      message: 'success',
    },
  },
}

//定义请求方法与路径
export default {
  'get|/user': userList,
}

Mock.mock('/user', 'post', (req) => {
  //路径与请求方式
  const { username, password } = JSON.parse(req.body) //将传递进来的数据保存
  for (let i = 0; i < userList.data.userinfo.length; i++) {
    //判断userList中是否存在该用户并且用户密码是否正确
    if (username === userList.data.userinfo[i].username && password === userList.data.userinfo[i].password) {
      return {
        meta: {
          msg: 'success',
          status: 200,
        },
        user: {
          username: userList.data.userinfo[i].username,
          roles: userList.data.userinfo[i].roles,
          token: userList.data.userinfo[i].token,
          rights: userList.data.userinfo[i].rights,
        },
      }
    }
  }
  return {
    meta: {
      msg: 'error',
      status: 201,
    },
  }
})
