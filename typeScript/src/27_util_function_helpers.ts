//ReturnType<F> 
//Paramertes<F>
//InstanceType<Constructor>

function extraUserInfo(id:string,isExtraInfo=false){
    return {
        id,
        name:"Ashutosh Singh",
        log:isExtraInfo?"detials":(undefined as String | undefined)
    }
}

type GetUserReturnInfo=ReturnType<typeof extraUserInfo>
type GetUserParamsInfo=Parameters<typeof extraUserInfo>


const argsInfo:GetUserParamsInfo=["u1",true]
const resultInfo:GetUserReturnInfo=extraUserInfo(...argsInfo)


class PersonN1{
    constructor(public name:string,public age:number){}

    greet(){
        return `Hi i am tis`
    }
}

type PersonInstanceN1=InstanceType<typeof PersonN1> 
type PersonCtorArgesN1=ConstructorParameters<typeof PersonN1>

const resultInfo1:PersonCtorArgesN1=["Ashutosh",29]
const abc:PersonInstanceN1=new PersonN1(...resultInfo1);


console.log(abc.greet());

