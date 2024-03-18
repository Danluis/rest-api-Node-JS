const {Router} = require('express')

const router = Router()

router.get('/', (req, res) => {
    const data = {
        "name": "Danluis",
        "website": "danluisdtg.netlify.com"
    }
    res.json(data);
})

module.exports = router;