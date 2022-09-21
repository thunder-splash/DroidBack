const {Preference} = require('../models/models')
const ApiError = require('../error/ApiError')

class PreferencesController {
    async create (req, res) {
        const {name, type, title, description} = req.body
        const pref = await Preference.create({name, type, title})
        return res.json(pref)
    }

    async getAll (req, res) {
        const pref = await Preference.findAll()
        return res.json(pref)
    }

    async getOne (req, res) {
        const {id} = req.params
        const ref = await Preference.findOne(
            {
                where: {id},
                include: [{model: Preference, as: 'info'}]
            }
        )
        return res.json(ref)
    }

    async delete (req, res, next) {
        const ToBeRemoved = req.body.name
        const pref = await Preference.destroy({where: {name: ToBeRemoved}})
        if (!pref){
            return next(ApiError.badRequest('Объект с таким именем не найден'))
        }
        return res.json({message: 'Объект удалён успешно'})
    }
}

module.exports = new PreferencesController()