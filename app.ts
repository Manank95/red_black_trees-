import rb = require( 'redblack.js' );

class Dictionary{
    
        public rbtree;
    
        constructor(){
            this.rbtree = rb();
        }
    
        public insert(key : String, val : String){
            this.rbtree.add(key, val);
        }
    
        public retrieve(key : String) : String{
            return this.rbtree.getValue(key);
        }
    
        public deleteKey(key : String){
            this.rbtree.remove(key);
        }
    
        public hasKey(key : String) : boolean{
            console.log();
            return this.rbtree.getValue(key) != undefined;
        }
    
    }
var d = new Dictionary();
d.insert("hello","world");
d.insert("goodbye","everyone");
d.insert("name","student");
d.insert("occupation","student");
d.insert("year","2016");
d.insert("gpa","4.0");
d.insert("lab","yes");
d.insert("assignment","no");
d.insert("department","cs");


console.log(d.retrieve("gpa"));
console.log(d.retrieve("department"));