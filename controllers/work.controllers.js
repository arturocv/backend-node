const { response } = require('express');
const WorkModel = require('../models/WorkModel');

const showWorks = async (req, res = response) => {
    const works = await WorkModel.find();
    res.json({
        ok:true,
        works
    });
}

const createWorks = async(req, res = response) => {
    const data = req.body;    
    try {
        const work = new WorkModel(data);
        await work.save();

        return res.status(201).json({
            ok: true,
            msg: "Tarea creada correctamente."
        })
    } catch (error) {
        console.log(error);        
        return res.status(500).json({
            ok: false,
            msg: 'Error al crear la tarea.'
        });
    }
}

const updateWorks = async (req, res = response) => {
    const workId = req.params.id;

    try {
        const work = await WorkModel.findById( workId );
        if(!work){
            return res.status(404).json({
                ok: false,
                msg: 'La tarea no extiste.'
            });
        }

        const newWork = { ...req.body }

        const updateWork = await WorkModel.findByIdAndUpdate(workId, newWork, {new: true});

        res.json({
            ok:true,
            msg: 'Tarea actualizada correctamente.',
            work: updateWork
        });
    } catch (error) {
        console.log(error);        
        res.status(500).json({
            ok: false,
            msg: 'Error al actualizar la tarea.'
        });
    } 
}

const deleteWorks = async(req, res = response) => {
    const workId = req.params.id;

    try {
        const work = await WorkModel.findById( workId );
        if(!work){
            return res.status(404).json({
                ok: false,
                msg: 'La tarea no extiste.'
            });
        }

        const updateWork = await WorkModel.findByIdAndDelete(workId);

        res.json({
            ok:true,
            msg: 'Tarea borrada.'
        });
    } catch (error) {
        console.log(error);        
        res.status(500).json({
            ok: false,
            msg: 'Error al actualizar la tarea.'
        });
    } 
}




module.exports = {
    showWorks,
    createWorks,
    updateWorks,
    deleteWorks
}