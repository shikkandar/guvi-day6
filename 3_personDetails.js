class person{
    constructor(F_name,L_name,age,gender,email,ph,address){
        this.F_name=F_name,
        this.L_name=L_name,
        this.age=age,
        this.gender=gender,
        this.email=email,
        this.ph=ph,
        this.address=address
    }
    getFullName(){
        return `Full Name: ${this.F_name} ${this.L_name}`
    }
    getContact(){
        return `Contact Details: Email:${this.email} PH:${this.ph}`
    }
}

const person1=new person("Shikkandar","Badusha",21,"Male","shikkandarbabu@gmail.com",9080830072,"pasupathipalayam,karur,tamilnadu")
console.log(person1.getFullName());
console.log(`Age:${person1.age}`);
console.log(`Gender:${person1.gender}`);
console.log(person1.getContact());
console.log(`Address:${person1.address}`);