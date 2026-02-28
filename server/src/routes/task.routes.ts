import { Router } from 'express';
import { getAllTasks } from '../controllers/task.controller';
import { getTaskById } from '/..controllers/task.controller';

const router = Router();

router.get('/tasks', getAllTasks);
router.get('/:id', getTaskById);

export default router;