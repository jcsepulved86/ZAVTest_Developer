import express, { Router } from 'express';

import listzavController from '../controllers/listzavControllers';

class listZAVRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', listzavController.list);
        this.router.get('/:id', listzavController.getOne);
        this.router.post('/', listzavController.create);
        this.router.put('/:id', listzavController.update);
        this.router.delete('/:id', listzavController.delete);
    }

}

export default new listZAVRoutes().router;

