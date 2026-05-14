//Promise<T>
//nested <Promise<Promise<T>>
//thanables


//Awaited<T>

 type Promise1 = Awaited<Promise<number>>// number
 type Promise2 = Awaited<Promise<Promise<String>>>
 type Awaited1 = Awaited <string> // string

 type PromiseUnionExample=Awaited<Promise<string | number>>

 async function fetchCount(){
return 42 as const 
 }

  type ResolvedFetchCoundValue = Awaited<ReturnType<typeof fetchCount>>

  async function getData(){
    return Promise.all([
        Promise.resolve(1 as const),
        Promise.resolve("x" as const)
    ] as const)
  }

//   type DataTupleWithPromse= Awaited<ReturnType<TypeOf getData>>