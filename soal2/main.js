const x={
    max: function() {
        if(arguments.length===0) {
            return "null"
        }
        this.maxnum=BigInt(Number.MIN_SAFE_INTEGER)
        for(let org of arguments){
         if(typeof org!=="bigint"){
          if(org>Number.MAX_SAFE_INTEGER||org%1!==0||org==""){
              return"BIG ERROR"
          }
          else{
              org=BigInt(org)
          }}
         if(org>this.maxnum)
          {
             this.maxnum=org
          }}
            return this.maxnum
        }  
}
console.log(x.max(1n,10n,5n));
console.log(x.max("10",5n,1));
console.log(x.max(0n));
console.log(x.max(2**53-1));
console.log(x.max(2**53));
console.log(x.max("10"/3));
console.log(x.max("10"/2));
console.log(x.max(10 - 12, 10 - 10, 10 - 11))

