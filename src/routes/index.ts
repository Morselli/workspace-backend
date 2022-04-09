import { Router } from 'express';
import { EmployeeController } from '../api/modules/employee/employee.controller';
import { UserController } from '../api/modules/user/user.controller';
import { VacationController } from '../api/modules/vacations/vacation.controller';
import { ensureAuth } from '../api/middlewares/ensureAuth';

const router = Router();

const userController = new UserController();
const employeeController = new EmployeeController();
const vacationController = new VacationController();

router.post('/login', userController.login);
router.post('/createUser',  userController.createUser);

router.post('/createEmployee', employeeController.createEmployee);

router.post('/createVacation', ensureAuth, vacationController.createVacation);
router.get('/vacation', ensureAuth, vacationController.listPendingVacations);
router.get('/listAllVacations', ensureAuth, vacationController.listVacations);

router.put('/approveVacations/:vacationId', ensureAuth, vacationController.approveVacations);
router.put('/repproveVacations/:vacationId', ensureAuth, vacationController.repproveVacations);

export { router };
