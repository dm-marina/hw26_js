function sum(accum=0){
    const statistic={
        increase:0,
        decrease:0,
        get:0,
        getStatistic:0
    };
    return {
        increase(num){
            statistic.increase++;
            return accum+=num;  
        },
        decrease(num){
            statistic.decrease++;
            return accum-=num;
        }, 
        get(){
            statistic.get++;
            return accum;
        },
        getStatistic(){
            statistic.getStatistic++;
            return statistic;
        },
        clearCounter(){
            return accum =0;
        },
        clearStatistic(){
            for(const key in statistic){
                statistic[key]=0;
            }
            return statistic;
        }

    }
}
const output = sum()
console.log(output.increase(1));
console.log(output.increase(2));
console.log(output.increase(3));
console.log(output.decrease(3));
console.log(output.decrease(1));
console.log(output.get());
console.log(output.getStatistic());
console.log(output.clearCounter());
console.log(output.clearStatistic());
