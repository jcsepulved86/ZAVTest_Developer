import { Request, Response } from 'express';


import pool from '../database';

class ListzavController {

    public async list(req: Request, res: Response): Promise<void> {
        const list = await pool.query('SELECT * FROM games');
        res.json(list);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const list = await pool.query('SELECT * FROM games WHERE id = ?', [id]);
        console.log(list.length);
        if (list.length > 0) {
            return res.json(list[0]);
        }
        res.status(404).json({ text: "The list doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO games set ?', [req.body]);
        res.json({ message: 'List Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE games set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "The list was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM games WHERE id = ?', [id]);
        res.json({ message: "The list was deleted" });
    }
}

const listzavController = new ListzavController;
export default listzavController;