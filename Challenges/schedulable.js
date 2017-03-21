s=0
schedulable=t=>{
    var n=t.length
    for(i in t)
        s+=t[i][0]/t[i][1]
    return s<0.8
}
