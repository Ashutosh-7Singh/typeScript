type NumberDict = {[k:string]:number}

const counters :NumberDict={}

counters['Likes'] = 1
counters['comments']=23
counters['share']=100

// another way to  write this 

type matrics=Record<"likes"|"views"|"comment",number>//tight and safer
const mm:matrics={likes:12,views:2222,comment:3234}

const priceMap = new  Map<string , number>()
priceMap.set('likes',1)