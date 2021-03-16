class NumHelper {
    isNumeric(value) {
        if (!isNaN(value)) {
            let digits = Number(value);

            if (!Number.isInteger(digits))
                digits = digits.toFixed(1);

            return digits;
        }

        return false;
    }

    stepHolder(base, last) {
        let sum = Number(base) + Number(last);

        if (!Number.isInteger(sum))
            sum = sum.toFixed(1);

        return sum;
    }
}

const Numerics = new NumHelper();

export default Numerics;