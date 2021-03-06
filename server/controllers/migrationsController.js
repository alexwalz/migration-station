const db = require('../models/Migrations')
const coursesDB = require('../models/Courses')

module.exports = {
    findAll: function (req, res) {
        db
            .find({})
            .populate({ path: 'Courses', model: coursesDB})
            .then(function (dbModel) {
                res.json(dbModel);
            })
            .catch(function (err) {
                res.json(err);
            });
    },
    findById: function (req, res) {
        db
            .findById(req.params.id)
            .populate('Course')
            .then(function (dbModel) {

                var data={
                    name: dbModel.name,
                    date: dbModel.date,
                    _id: dbModel._id,
                    path: dbModel.path,
                    courseShells: dbModel.courseShells,
                    importType: dbModel.importType,
                    complete: dbModel.complete,
                    domain: dbModel.domain

                }
                
                res.json(data);

            })
            .catch(function (err) {
                res.json(err);
            });
    },
    
    create: function (req, res) {
        db
            .create(req.body)
            .then(dbModel => {
                res.json(dbModel);
            })
            .catch(err => {
                console.log(err);
                res.status(422).json(err);

            });
    },
    update: function (req, res) {
        db
            .findOneAndUpdate({_id: req.params.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db
            .findById({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};