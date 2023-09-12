const TaskModel = require('../model/TaskModel');
const { isPast } = require('date-fns')

const TaskValidation = async (req, res, next) => {
    const { macaddress, type, title, description, when, done, created } = req.body;

    if(!macaddress) return res.status(400).json({ error: "macaddress é obrigatorio"});
    else if(!type) return res.status(400).json({ error: "tipo é obrigatorio"});
    else if(!title) return res.status(400).json({ error: "título é obrigatorio"});
    else if(!description) return res.status(400).json({ error: "descrição é obrigatorio"});
    else if(!when) return res.status(400).json({ error: "Data e hora é obrigatorio"});
    else if(isPast(new Date(when))) return res.status(400).json({ error: "Escolha uma data e hora futuras"});
    else {
        let exists;

        if(req.params.id){
            exists = await TaskModel
            .findOne({
                '_id':{'$ne': req.params.id},
                'when':{'$eq': new Date(when)},
                'macaddress':{'$in': macaddress}
            });
        }else{
            exists = await TaskModel.findOne({'when': {'$eq': new Date(when)}, 'macaddress': {'$in': macaddress}})
        }
        if(exists){
            return res.status(400).json({error: "já existe uma tarefa na data e hora marcados"})
        }

        next();
    }
    

}

module.exports = TaskValidation