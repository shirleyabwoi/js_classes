// You are building a feature rollout system for a startup where a FeatureToggle constructor function
// has properties: featureName (string), isEnabled (boolean), and userGroupAccess (array of strings like "betaTesters", "admins"),
//  and you must use a prototype method canAccess(userRole) to return true or false,
//  a method toggleFeature(flag) to enable or disable the feature, and simulate access attempts using if-else and switch statements for different roles.

function FeatureToggle(featureName,isEnabled,userGroupAccess){
    this.featureName=featureName;
    this.isEnabled=isEnabled;
    this.userGroupAccess=userGroupAccess;
}

FeatureToggle.prototype.canAccess=function(userRole){
  if(this.isEnabled)
    return true
else{
    return false
}
}
FeatureToggle.prototype.toggleFeature=function(flag){
    this.isEnabled=flag

}
FeatureToggle.prototype.simulateAccess=function(featureToggle,userRole){
    this.featureToggle=featureToggle
    this.userRole=userRole
    switch(userRole){
        case"admins":
        case"betatesters":
    if(featureToggle.canAccess(userRole))
        console.log('${userRole} access granted for ${featureToggle.featureName')
      
    }
}

const feature=new FeatureToggle("joan",false,["betatesters","admins"])
console.log(feature.canAccess())
//In a freelancer time-tracking platform, create a TimeLog constructor function with properties:
//  freelancerName (string), projectDetails (object with name and hourlyRate), and logs (array of objects with date, hoursWorked), 
// then add prototype methods to calculate total earnings, filter logs by date range, and determine if weekly hours exceed 40 using if-else logic.


function Timelog(freelancer,projectDetails,logs){
    this.freelancer=freelancer;
    this.projectDetails=projectDetails;
    this.logs=logs;
}
Timelog.prototype.totalEarnings=function(){
    let hours=0;
   for(let log of this.logs){
    hours+=log.hoursWorked;
   }
   return hours * this.projectDetails.hourlyRate
       
}
Timelog.prototype.dateRange=function(start,end){
    return this.logs.filter(log=> log.date <= end && log.date >= start)
}
Timelog.prototype.weeklyhours=function(){
    let total=this.logs.reduce((x,log)=> x+log.hoursWorked,0)
    if (total >= 40){
        console.log('This are the total hours ${this.logs.hoursWorked}')
    }
    else{
        console.log('The hours are less than 40')
    }
}

const editor=new Timelog("Editor",{
    name:"Shirley",
    hourlyRate:200
},[{
    date:"10-04-2025", hoursWorked:12},
{date:"12-04-2025", hoursWorked:15},
{date:"13-04-2025",hoursWorked:11}
]
)
console.log(editor.weeklyhours())
console.log(editor.totalEarnings())
console.log(editor.dateRange("10-04-2025","13-04-2025"))
//You are developing a startup’s order management system where an Order constructor function should contain customer 
// (object with name and email), items (array of objects with productName, quantity, and unitPrice), and status (string),
//  then implement prototype methods to compute total cost, update order status based on payment, and categorize order urgency using switch and conditional statements.

function Order(customer,items,status){
    this.customer=customer;
    this.items=items;
    this.status=status;
}

Order.prototype.totalCost=function(){
    let cost=0
    this.items.array.forEach(element => {
        cost +=element.quantity*element.unitPrice
    });
    return cost

}
Order.prototype.updateStatus=function(payment){
    if(payment){
        this.status="Payment made"
    }
    else{
        this.status="Payment not made"
    }
}
origin.prototype.category=function(){
    switch(this.status){
        case"payment not made":
        if (this.items.length >3){
            return "Urgent"
        }
        else {
            return "relatively urgent"
        }
        break;
        case "Payment made":
            return "no urgency"
            break;
            default:
                return "urgency not found";
    }

};

const customer=new Order({
    name:"Shirley",
     email:"shirleyabwoi@gmail.com"},[
        {productName:"pens",quantity:3,unitPrice:30},
        {productName:"books",quantity:10,unitPrice:100},
        {productName:"pencils",quantity:13,unitPrice:35},
     ],"payment made")

     console.log(customer.totalCost());
     console.log(customer.category());
     console.log()
// In a startup’s employee review tool, design an Employee class with properties: 
// id (number), name (string), performanceMetrics (object with keys like communication, efficiency, and reliability), and feedback (array of strings), 
// then use prototypes to calculate an average score, classify performance level using control flow, and add new feedback based on conditions.


class Employee{
    constructor(id,name,performanceMetrics,feedback){
        this.id=id;
        this.name=name;
        this.performanceMetrics=performanceMetrics;
        this.feedback=feedback;
    }
}
Employee.prototype.averageScore=function(){
let total=0
let count=0
for(let metric in this.performanceMetrics){
    total += this.performanceMetrics[metric];
    count++
}
return total/count
}
Employee.prototype.performance=function(){
    let average=this.averageScore()
    if(average>= 8){
        return "performed well"
    }
    else if (average>=6){
        return "average performance"
    }
    else{
        return "below average"
    }

}
Employee.prototype,feedback=function(){
    if (newFeedback.length >0){
        this.feedback.push(newFeedback)
    }
    else{
        console.log("enter feedback")
    }

};
const employee=new Employee("2070","Shirley",{communication:7,efficieny:5,reliability:10},[]);
console.log(employee.feedback());
console.log(employee.performance());
console.log(employee.averageScore());
// Build a simple e-learning system where a Course class has properties: title (string), 
// instructor (object with name and expertise), and students (array of objects with name and completionStatus),
// then add prototype methods to return names of students who completed the course, count enrolled students by expertise area, 
// and use control flow to output different messages for instructors with more or less than 5 students.

class Course{
    constructor(title,instructor,students){
        this.title=title;
        this.instructor=instructor;
        this.students=students;
    }
}
Course.prototype.completed=function(){
 return this.students.filter(student => student.completed===true)
}
Course.prototype.enrolledStudents=function(expert){
    return this.students.filter(student => this.instructor.expert ===expert).length

}
Course.prototype.message=function(){
    if(this.student.length > 5){
        return `${this.instructor.name}:Your students are more than 5`
    }
    else {`${this.instructor.name}: Your students are less than 5`}

}
const course=new Course(
    "Frontend",{name:"James", expert:"Backend"},[
        {name:"Shirley",completed:true},
        {name:"Bilha",completed:true},
        {name:"Anne",completed:false},
    ]
)
console.log(message());
console.log(enrolledStudents());
console.log(completed());
