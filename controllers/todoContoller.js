const {todo} = require ('../models')


class todoController {
    static async getAll (req, res, next){
        try{
            const data = await todo.findAll({where: {status: 'active'}})
            
            if(!data){
                throw {name: 'Not Found'}
            }else{
                res.status(200).json(data)
            }
        }catch (err){
            next (err)
        }
    }
    static async getOne (req, res, next){
        const {id} = req.params
        try{       
            const data = await todo.findByPk(req.params.id)
            if(!data){
                throw {name: 'Not Found'}
            }else{
                res.status(200).json(data)
            }
        }catch (err){
            next (err)
        }

    }
    static async create (req, res, next){
        const {title, status} = req.body
        try{
            const data = await todo.create({title, status})
            res.status(201).json(data)
        }catch (err){
            next(err)

        }
    }
    // static async update (req, res, next){
    //     const {id} = req.params
    //     const {title, status} = req.body
    //     try{
    //         const data = await todo.update({title, status},{where: {id}})
    //         if(!data){
    //             throw {name: 'Not Found'}
    //         }else{
    //             res.status(200).json(data)
    //         }

    //     }catch (err){
    //         next(err)
    //     }

    // }

    static update = async (req, res, next) => {
        try {
          const data = await todo.findByPk(req.params.id);
          if (!data) throw { name: "ErrorNotFound" };
          await data.update(req.body);
          res.status(200).json(data);
        } catch (error) {
          next(error);
        }
      };

    static async delete (req, res, next){
        const {id} = req.params
        try{
            await todo.update({status: 'inactive'}, {where: {id}})
            res.status(200).json({message: 'item deleted successfully'})
        }catch (err){
            next(err)
        }
    }

}

module.exports = todoController