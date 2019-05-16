class Army{
    constructor(name, power, n_soldiers, rage){
        this.name = name
        this.power = power
        this.n_soldiers = n_soldiers
        this.rage = rage
    }
    get get_n_soldiers(){
        return this.n_soldiers
    }
    set set_n_soldiers(soldiers){
        this.n_soldiers = this.n_soldiers - soldiers
    }
    attack(){
        return (this.power * this.rage) / this.get_n_soldiers
    }
    static guantlet(){
        const probability = Math.random() * 100
        let use_guantlet = false
        if(probability > 95){
            use_guantlet = true
        }
        return use_guantlet
    }
}

const fight = () => {
    let thanos_army = new Army('Los Chitaury', 3000, Math.random() * 1000, 80)
    let avengers_army = new Army('Avengers', 3150, Math.random() * 20000, 95)
    while(thanos_army.get_n_soldiers > 0 && avengers_army.get_n_soldiers > 0){
        thanos_army.set_n_soldiers = avengers_army.attack()
        avengers_army.set_n_soldiers = thanos_army.attack()
        console.log(thanos_army.get_n_soldiers)
        console.log(avengers_army.get_n_soldiers)
    }
    if(thanos_army.get_n_soldiers > avengers_army.get_n_soldiers){
        console.log('Thanos y los Chitaury han ganado')
    } else {
        console.log('Los Avengers junto a Wakanda han ganado')
    }
    if(thanos_army.get_n_soldiers > avengers_army.get_n_soldier){
        if(Army.guantlet() == true){     
        console.log('Thanos junto a los Chitaury desaparecieron gracias al guantelete')
        } else {
        console.log('Los Vengadores no han podido con Thanos con el guantelete')
        }
    } else {
        if(Army.guantlet() == true){
            console.log('Thanos ha ganado utilizando las piedras')
        } else {
            console.log('Thanos perdio vs Los Avengers aún teniendo el guante')
        }
    }   
}

fight()