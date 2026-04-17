const ROLES=["admin","user","operator"] as const

// derived a union from the array
type Role =(typeof ROLES)[number]

function setRole(r:Role){
    console.log(r)
}

setRole('user')