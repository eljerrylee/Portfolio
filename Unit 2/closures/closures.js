function createCharacter(Name, HP, ...Moves) {

    var hp = HP;
    var name = Name;
    var movesArray = Moves;

    return {
        healthPoint: function(){return hp;},
        getName: function(){return name;},
        appendMoves: function(){
            const movesDiv = document.querySelector('.moves');
            for (var move of movesArray) {
                var p = document.createElement('p');
                p.textContent = move;
                movesDiv.appendChild(p);
            }
            return movesArray;
        }
    }
}

var character = createCharacter('Badman', 100, 'Punch', 'Kick', 'Jump');

character.appendMoves();

console.log('Hp: ', character.healthPoint());
console.log('Name: ', character.getName());
