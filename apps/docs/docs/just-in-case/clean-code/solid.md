# SOLID Principle

- Single Responsibility
- Open Close
- Liskov Substitution
- Dependency Injection
- 高内聚(模块内), 低耦合(模块间)
- Separation of concerns
- 高内聚、低耦合
- DRY
- KISS
- YAGNI
- 代码大部分时候是用来维护的，而不是用来实现功能的
- 优秀的代码大部分是可以自描述的，好于文档和注释
- 设计模式只是手段，代码清晰才是目的
- 代码整洁的常见手段
  - code review
  - 勤于重构
  - 静态检查
  - 多读开源代码和身边优秀同学的代码
- 代码整洁的常见技巧
- 单一职责
- 面向接口编程
- 封装 继承 多态
- SOLID
- 最少知道原则
- 懒加载，需要时再创建，对象的创建要紧挨着变量的使用，避免创建无用的对象
- Keep it Simple Stupid
- you aren't gonna need it
- Separation of Concerns
- Don't Repeat Yourself
- Single Source of Truth
- 避免过早优化
- 童子军规则
 - 离开营地时让它比你发现它时更干净
 - 童子军规则规定我们应该始终保持代码比我们发现的更干净
- Separation of Concerns


## Single Responsibility

- 单一责任原则
- 封装
- 一个类, 只有一个职责, 只有一个引起其变化的原因
- 实现高内聚、低耦合的指导方针
  1. 类内的属性被方法依赖的越多越内聚
- 最简单也最难, 类的颗粒度大小难以控制
- DAO模式 - Data Access Object,
  1. 隔离了数据访问代码和业务逻辑代码, 符合SRP
  2. 隔离了不通数据库实现, MySQL换Oracle只需要增加一个新的实现类, 符合OCP

## Open Close

- 开闭原则
- 继承
- 一个类, 对拓展开放, 对修改关闭

## Liskov Substitution

- 里氏替换
- 多态
- 基类可以出现的地方子类一定可以出现
- Derived classes must be substitutable for their base classes - Robert.C.Marin
- whatever the parent can do, the descendants should at least be able to do that
- 子类overwrite父类方法的时候要保证签名一致

## Interface Segregation

- 接口隔离
- 不应该出现的接口不应该出现
- 接口应该足够小
- 实现类不应该依赖其不需要的接口; 因为对于接口中出现的方法, 不管对类有用或者无用, 类都要去实现它

## Dependency Inversion 

- 依赖注入
- 控制反转 - Inversion Of Control
  - 高层模块不要依赖低层模块, 抽象不依赖实现
- 依赖注入是控制反转的实现

## Law of Demeter

- Each unit should have only limited knowledge about other units
- a specific case of loose coupling
