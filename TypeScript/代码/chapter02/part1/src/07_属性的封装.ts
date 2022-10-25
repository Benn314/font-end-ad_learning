(function (){
    // 定义一个表示人的类
    class Person{
        // TS可以在属性前添加属性的修饰符
        /*
        *   public 修饰的属性可以在任意位置访问（修改） 默认值
        *   private 私有属性，私有属性只能在类内部进行访问（修改）TS独有的 JS没有 所以没有配置tsconfig文件信息的话 虽然有标红但编译仍能通过 我们要设置TS有错误提示时 编译通过不了 "noEmitOnError": true
        *       - 通过在类中添加方法使得私有属性可以被外部访问
        *   protected 受包含的属性，只能在当前类和当前类的子类中访问（修改）
        *
        * */
        private _name: string;
        private _age: number;

        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }

        /*
        *   getter方法用来读取属性
        *   setter方法用来设置属性
        *       - 它们被称为属性的存取器
        * */

        // 定义方法，用来获取name属性
        // getName(){
        //     return this._name;
        // }
        //
        // // 定义方法，用来设置name属性
        // setName(value: string){
        //     this._name = value;
        // }
        //
        // getAge(){
        //     return this._age;
        // }
        //
        // setAge(value: number){
        //     // 判断年龄是否合法
        //     if(value >= 0){
        //         this._age = value;
        //     }
        // }

        // TS中设置getter方法的方式 这些是存取器使用
        get name(){
            // console.log('get name()执行了！！');
            return this._name;
        }

        set name(value){
            this._name = value;
        }

        get age(){
            return this._age;
        }

        set age(value){
            if(value >= 0){
                this._age = value
            }
        }
    }

    const per = new Person('孙悟空', 18);

    /*
    * 现在属性是在对象中设置的，属性可以任意的被修改,
    *   属性可以任意被修改将会导致对象中的数据变得非常不安全
    * */

    // per.setName('猪八戒');
    // per.setAge(-33);

    per.name = '猪八戒';
    per.age = -33;

    // console.log(per);


    class A{
        protected num: number;

        constructor(num: number) {
            this.num = num;
        }
    }

    class B extends A{

        test(){
            console.log(this.num);
        }

    }

    const b = new B(123);
    // b.num = 33;


   /* class C{

        name: string;
        age: number

        // 可以直接将属性定义在构造函数中
        constructor(name: string, age: number) {
            this.name = name;
             this.age = age;
        }

    }*/

    class C{

        // 可以直接将属性定义在构造函数中
        constructor(public name: string, public age: number) {
        }

    }

    const c = new C('xxx', 111);

    console.log(c);

})();