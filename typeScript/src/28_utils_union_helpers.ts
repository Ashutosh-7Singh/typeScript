// Exclude<U ,V> -> remove from U those member assignable to V
// Extract<U,V> -> keep from U those member assignable to V

// Nonnullable 


type EventType1= "click" | "submit" | "hover" | "keydown" | "keyup" ;
type EventType2= Exclude<EventType1,"keydown">

function handleEvent1(e:EventType2){
    console.log()
}
handleEvent1('keyup')

type ActionsN1="create"|"update"|"delete"|"read"
type ActionsN2=Extract<ActionsN1,"create"|"update"|"delete">


function handleEvent2(e:ActionsN2){
    console.log(e)
}

handleEvent2('create')


type MayBeNumber=number|null|undefined
type CleanNumber=NonNullable<MayBeNumber>

function square(num:CleanNumber){
    return  num*2
    
}

square(10);
 