import {Router} from 'express';
import {validateUser} from '../middleware/validateUser';
import {createUser} from '../controllers/controllers';

const router = Router();

router.post('/createuser',validateUser, createUser);

export default router;
