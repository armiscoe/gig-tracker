const router = require('express').Router();
let Show = require('../models/show.model')

router.route('/').get((req, res) => {
    Show.find()
        .then(shows => res.json(shows))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const venue = req.body.venue;
    const band = req.body.band;
    const duration = req.body.duration;
    const date = Date.parse(req.body.date);

    const newShow = new Show({
        username,
        venue,
        band, 
        duration,
        date
    })

    newShow.save() 
    .then(() => res.json('Show added!'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
    Show.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').delete((req, res) => {
    Show.findByIdAndDelete(req.params.id)
        .then(() => res.json('Show deleted'))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req, res) => {
    Show.findById(req.params.id)
        .then(show => {
            show.username = req.body.username;
            show.venue = req.body.venue;
            show.band = req.body.band;
            show.duration = req.body.duration;
            show.date = Date.parse(req.body.date);

            show.save()
                .then(() => res.json('Show updated'))
                .catch(err => res.status(400).json('Error: ' + err))

        })
        .catch(err => res.status(400).json('Error: ' + err))

})


module.exports = router;
