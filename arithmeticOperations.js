x = 0
y = 0

function num_add() {
    return x + y;
}
document.getElementById('add').innerHTML = num_add();

function num_sub() {
    return x - y;
}
document.getElementById('sub').innerHTML = num_sub();

function num_mul() {
    return x * y;
}
document.getElementById('mul').innerHTML = num_mul();

function num_div() {
    return x / y;
}
document.getElementById('div').innerHTML = num_div();

function num_rem() {
    return x % y;
}
document.getElementById('rem').innerHTML = num_rem();

function num_inc_x() {
    x++;
    z = x;
    document.getElementById('incdec').innerHTML = 'x' + ' = ' + z + '<br>' + 'y' + ' = ' + y;
}

function num_dec_x() {
    x--;
    z = x;
    document.getElementById('incdec').innerHTML = 'x' + ' = ' + z + '<br>' + 'y' + ' = ' + y;
}
function num_inc_y() {
    y++;
    z = y;
    document.getElementById('incdec',).innerHTML = 'x' + ' = ' + x + '<br>' + 'y' + ' = ' + z;
}

function num_dec_y() {
    y--;
    z = y;
    document.getElementById('incdec').innerHTML = 'x' + ' = ' + x + '<br>' + 'y' + ' = ' + z;
}

function num_exp() {
    return x ** y;
}
document.getElementById('exp').innerHTML = num_exp();