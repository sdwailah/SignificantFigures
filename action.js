function getCalulit()
{
    var number1 = parseFloat(document.getElementById("input1").value);
    var number2 = parseFloat(document.getElementById("input2").value);
    var operation = document.getElementById("opration").value;
    var result;

    var number1Precision = getSignificantDigitCount(number1);
    var number2Precision = getSignificantDigitCount(number2);
    
    switch (operation)
    {
        case"multiply":
            resutl = number1 * number2;
        break;
        case"dividing":
        resutl = number1 / number2;
        break;
        case"add":
            resutl = number1 + number2;
        break;
        case"subtract":
        resutl = number1 - number2;
        break;
    }

    document.getElementById("result").value = resutl;

    if(number1Precision > number2Precision)
    {
        document.getElementById("precision").value = number2Precision
    }
    else
    {
        document.getElementById("precision").value = number1Precision
    }
}

function precisionTo()
{
    var fixedNumber = parseFloat(document.getElementById("precision").value);
    var targetNumber = parseFloat(document.getElementById("result").value);
    var result = parseFloat(targetNumber.toPrecision(fixedNumber));
    document.getElementById("precisionResult").value = result;
}



function roundCal() 
{
    var step = parseFloat(document.getElementById("stepValu").value);
    var OrginalValue = document.getElementById("result").value;
    step || (step = 1.0);
    var inv = 1.0 / step;
    var resutl = parseFloat(Math.round(OrginalValue * inv) / inv);
    document.getElementById("roundResult").value = resutl;
}


function getSignificantDigitCount(number) 
{
    var log10 = Math.log(10);
    clearNumber = Math.abs(String(number).replace(".", ""));
    if (clearNumber == 0) return 0;
    while (clearNumber != 0 && clearNumber % 10 == 0) clearNumber /= 10;
    return Math.floor(Math.log(clearNumber) / log10) + 1;
}
