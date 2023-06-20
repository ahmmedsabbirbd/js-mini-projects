const Calculator = {
    add(x, y) {
        return parseInt(x) + parseInt(y)
    },
    sub(x, y){
        return x - y
    },
    mul(x, y){
        return x*y
    },
    div(x, y){
        return x/y
    },
    calculate(el1, el2, operation) {
        const x = document.getElementById(el1).value
        const y = document.getElementById(el2).value

        let result = 0
        if('add'==operation) {
            result = x + y
        } else if('sub'==operation) {
            result = x - y
        } else if('mul'==operation) {
            result = x * y
        } else if('div'==operation) {
            result = x / y
        }

        return result
    },
    caculateHtml(operation){
        document.getElementById(operation).addEventListener('click', ()=> {
            const result = Calculator.calculate('x', 'y', operation)
            document.getElementById('result').value = result
        })
    }
}

export { Calculator }