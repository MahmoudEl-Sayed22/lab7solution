class Person{
        constructor(fullName, money, sleepHours, meals,items){
        this.fullName = fullName
        this.money = money
        this.sleepHours = sleepHours
        this.meals = meals
        this.items=items
    }
    sleepMood(sleepHours){
        if(this.sleepHours === 7){
            return ("you're Happy")
        }else if(this.sleepHours > 7){
            return("you're lazy")
        }else if(this.sleepHours < 7){
            return("you're tired")
        }
    }
    healthRate(meals){
        if(this.meals === 3){
            return ("100% Health rate")   
        }else if(this.meals === 2){
            return ("75% Health rate")   
        }if(this.meals === 1){
            return ("50% Health rate")   
        }
    }
    buy(items){
        return (this.money-(this.items*10));
    }
    }
    // const mahmoud =new Person ('mahmoud elsayed', 1000, 7, 2, 5)
    // console.log(mahmoud.fullName)
    // console.log(mahmoud.sleep(6))
    
class Employee extends Person {
    #salary

    constructor(fullName, money, sleepHours, meals,items,
        id,email, workmood,salary,ismanager){
     super(fullName, money, sleepHours, meals,items) 
        
        this.id = id
        this.email = email
        this.workmood = workmood
        this.#salary = salary >= 1000 ? salary : 1000;
        this.ismanager=ismanager
        }
    work(hours) {
        if(this.workmood === 8){
            return ("you're Happy")
        }else if(this.workmood > 8){
            return("you're tired")
        }else if(this.workmood < 8){
            return("you're lazy")
        }
    }
        get salary(){
            return this.#salary;
        }
        set salary(value){
           this.#salary=value
           if(value < 1000){ this.#salary=1000}

        }
        allEmployees = [];

        setEmployee(person) {
          this.allEmployees.push(person);
        }
    }
   
    // const mahmoud =new Employee ("mahmoud elsayed",1000,6,2,7,25,"jefe@dmk",3000,true )
    // const ali =new Employee ("ali ebrahim",1000,6,2,7,3,"jefe@dmk",3000,true )
    // const ahmed =new Employee ("ahmed mohamed",1000,6,2,7,2,"jefe@dmk",3000,true )
    // const samir =new Employee ("samir ahmed",1000,6,2,7,10,"jefe@dmk",3000,true )
    // const zaki =new Employee ("zaki saied",1000,6,2,7,5,"jefe@dmk",3000,true )
    // const khalid =new Employee ("khalid elsayed",1000,6,2,7,87,"jefe@dmk",3000,true )
    // console.log(Employee)
    // // console.lg(ali.salary)
    // ali.salary=1700
    // console.log(ali.salary)
    // console.log(mahmoud.sleep())
    
    class office extends Employee{
        constructor(fullName, money, sleepMood, healthRate,meals,
            id,email, workmood,ismanager){
                super(fullName, money, sleepMood, healthRate,meals,
                    id,email, workmood,ismanager)
                    this.allEmployees.push(this);
                    this.ismanager=ismanager;
        }
        getAllEmployees(){
          return this.allEmployees;
        }
        get(id) {
            let selected = this.allEmployees.find((elm) => elm.id == id);
        
            if (selected.ismanager) {
              selected = { ...selected, salary: null };
            }
        
            return selected;
          }
        
          fire(empId) {
            this.allEmployees = this.allEmployees.filter((elm) => elm.id != empId);
        
            return this.allEmployees;
          }
        
          hire(emplo) {
            this.allEmployees.push(emplo);
            console.log(this.allEmployees);
          }
        }
        
    const mahmoud =new office ("mahmoud elsayed",1000,6,7,2,25,"jefe@dmk",3000,true )
    // const ali =new office ("ali ebrahim",1000,6,2,7,3,"jefe@dmk",3000,false )
    // const ahmed =new office ("ahmed mohamed",1000,6,2,7,2,"jefe@dmk",3000,false )
    // const samir =new office ("samir ahmed",1000,6,2,7,10,"jefe@dmk",3000,false )
    // const zaki =new office ("zaki saied",1000,6,2,7,5,"jefe@dmk",3000,false )
    // const khalid =new office ("khalid elsayed",1000,6,2,7,87,"jefe@dmk",3000,false )
        
       
        const application = () => {
          const functionalities = prompt(
            "Welcome \nif you want to add new employee enter 'add' ,\nif you want to get data of an employee enter 'get',\n enter 'q' to quit app ."
          );
        
          if (functionalities === null || functionalities === "q") {
            return;
          }
        
          switch (functionalities) {
            case "add":
              const x = prompt(
                "if you are manager enter 'mngr' \n if you are normal employee enter 'nrml' "
              );
        
              if (x === "mngr" || x === "nrml") {
                let name = prompt("please enter your name ");
                let email = prompt(" please enter your email ");
        
                let newEmployee = new office(
                  name,
                  "",
                  "",
                  "",
                  "",
                  new Date().valueOf(),
                  email,
                  "",
                  x === "mngr" ? true : false
                );
        
                console.log("successful adding", newEmployee);

                alert("welcome" + name );
              } else {
                alert("Wrong input!");
                app();
              }
        
              break;
            case "get":
              let empId = prompt("please type the 'id' of employee you search ");
              console.log(mahmoud.get(empId));
              break;
            default:
              app();
          }
        };
        
        application();
        
        // getEmployee(){
        //    if(ismanager === yes){
        //     return person;
        //    }
        //    else if(person.id){
        //     continue;
        //    }
        // }
        // hire(Employee){
        //    console.log("your're hired")
        // }
        // fire(empId){
        //     console.log("sorry,you're not hired")
        // }
    // }
    // // console.log(office.getAllEmployees())
    // var x=prompt(" Wlcome :\n to add an employee enter (add) \n if you're a manager enter(mngr) \n if you're normal employee enter (nrml)\n ")
    //     if(x==="add"){ 
    //     addEmployess()
    //     }
    //    if(x==="mngr"){
    //     console.log("Welcome manager")
    //    }
   
    // function addEmployess(){
    //     var EmolyessData=[];
    //         let y=prompt("please enter the name ");
    //         let z=prompt("please enter the age");
    //         EmolyessData.push({"name":y, "age":z})
    //     return(console.log(`name:${y}   age:${z} `));
    //     }
    // // }