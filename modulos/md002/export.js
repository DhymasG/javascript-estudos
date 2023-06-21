class Cores{
    static cores=["Verde","Amarelo","Cinza"]

    constructor(){}

    static getTodasCores=()=>{
        return this.cores
    }

    static getCor=(i_cor)=>{
        return this.cores[i_cor]
    }

    static addCor=(novaCor)=>{
        this.cores.push(novaCor)
    }

    static apagarCor=()=>{
        this.cores=[]
    }
}

export default Cores