// method 1:

// function Singleton() {
//   return this.instance;
// }
// Singleton.prototype.instance = {};

// method2 

// function Singleton() {
//   throw new Error('xxx')
// }
// Singleton.prototype.instance = Object.create(new Singleton())
// Singleton.prototype.getInstance = function(){ return this.instance }



// try privaten constructor: 
//https://stackoverflow.com/questions/21667149/how-to-define-private-constructors-in-javascript

var SingletonClass = (function(){
  function SingletonClass() {
      //do stuff
  }
  SingletonClass.prototype.constructor = null
  var instance;
  return {
      getInstance: function(){
          if (instance == null) {
              instance = new SingletonClass();
              instance.constructor = null;
              // Hide the constructor so the returned objected can't be new'd...
              // 是为了阻止在外部我们直接通过 new instance.contructor()来构造一个和返回实例有一样的构造函数的实例
              // 但是我们仍然能通过instance的prototype.constructor 获取到 实例的构造函数, 所以加上了下面这一句
              // SingletonClass.prototype.constructor = null
          }
          return instance;
      }
 };
})();