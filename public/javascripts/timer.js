const timers = (functions) => {
    const timer = (func) => {
        const start = new Date().getTime();
        func();
        const end = new Date().getTime();
        const elapsed = end - start;
        return (
            func +
            '\n소요된 시간: ' +
            elapsed +
            `(start : ${start}, end : ${end})`
        );
    };

    let res = [];
    for (let i = 0; i < functions.length; i++) {
        res.push(timer(functions[i]));
    }
    for (let i = 0; i < res.length; i++) {
        console.log('함수 내용\n' + res[i] + '\n');
    }
};

const testArr = new Array(10000).fill(0).map((e, i) => i);

const test1 = () => {
    for (let i = 0; i < testArr.length; i++) console.log(testArr[i]);
};

const test2 = () => {
    for (let i of testArr) console.log(i);
};

timers([test1, test2]);
