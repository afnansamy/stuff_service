const { Stuff } = require('../models');


//show all stuff
const index = async (req, res) => {
    try {
        const stuff = await Stuff.findAll()

        return res.json(stuff)

    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'something went WRONG' })
    }
}

//create stuff
const store = async (req, res) => {
    const { stuff_id, first_name, last_name, email, password, phone_number, job_title } = req.body

    try {
        const stuff = await Stuff.create({ stuff_id, first_name, last_name, email, password, phone_number, job_title })

        return res.json(stuff)

    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
}

//fine one stuff by id
const show = async (req, res) => {
    const stuff_id = req.params.stuff_id

    try {
        const stuff = await Stuff.findOne({
            where: { stuff_id }
        })

        return res.json(stuff)

    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'something went WRONG' })
    }
}
//fine one stuff by email
const readByEmail = async (req, res) => {
    const stuff_id = req.params.email

    try {
        const stuff = await Stuff.findOne({
            where: { email }
        })

        return res.json(stuff)

    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'something went WRONG' })
    }
}

//update stuff
const update = async (req, res) => {
    const stuff_id = req.params.stuff_id
    const { first_name, last_name, email, password, phone_number, job_title } = req.body

    try {
        const stuff = await Stuff.findOne({ where: { stuff_id } })

        stuff.first_name = first_name
        stuff.last_name = last_name
        stuff.email = email
        stuff.password = password
        stuff.phone_number = phone_number
        stuff.job_title = job_title

        await stuff.save()
        return res.json(stuff)

    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'SOMTHING went WRONG' })
    }
}

//delete stuff
const destroy = async (req, res) => {
    const stuff_id = req.params.stuff_id

    try {
        const stuff = await Stuff.findOne({ where: { stuff_id } })

        await stuff.destroy()
        return res.json({ message: 'STUFF DELETED' })

    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'SOMTHING WENT WRONG' })
    }
}

module.exports = {
    index,
    store,
    show,
    update,
    destroy
}
