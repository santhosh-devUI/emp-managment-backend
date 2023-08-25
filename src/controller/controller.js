import empModel from "../model/emp-model.js"


export const addEmp=(req,res)=>{
    empModel.create(req.body).then(success=>{
        res.send(success)
    }).catch(err=>{
        res.send(err)
    })
}

export const getAllEmps=(req,res)=>{
    empModel.find().then(success=>{
        res.send(success)
    }).catch(err=>{
        res.send(err)
    })
}

export const updateEmp=(req,res)=>{
    empModel.findByIdAndUpdate(req.params.id,req.body,{new:true}).then(success=>{
        res.send(success)
    }).catch(err=>{
        res.send(err)
    })
}

export const deleteEmp=(req,res)=>{
    empModel.findByIdAndDelete(req.params.id).then(success=>{
        res.send(success)
    }).catch(err=>{
        res.send(err)
    })
}