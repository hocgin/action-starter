# action-env

## 如何使用
1. 编写 action.yml
   - `name` action 的名称
   - `author` 作者
   - `description` 描述 github action 的作用 
   - `inputs` 定义需要的输入参数
   - `outputs` 定义产生的输出参数

2. 编写主流程 `src/core.ts
3. 编写测试代码 `src/core.test.ts`
4. 运行`yarn build`生成 action 代码


**可选** 如果需要在本地测试 Github Action 可以参考 [nektos/act](https://github.com/nektos/act) 项目
