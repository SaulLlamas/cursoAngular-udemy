/**
 * @summary service.index.ts
 * @description Archivo para la carga de servicios
 * @author Saul Llamas Parra
 */

//============================================================
//GUARDS
//============================================================
export {AdminGuard} from './guards/admin.guard';
export {LoginGuard} from './guards/login.guard';

//============================================================
//SERVICES
//============================================================
export {HospitalService} from './hospital/hospital.service';
export {DoctorService} from './doctor/doctor.service';
export {UserService} from './user/user.service';

export {UploadFileService} from './upload-file/upload-file.service';
export {ThemeSettingsService} from './themeSettings/theme-settings.service';
export {SideBarService} from './shared/sidebar.service';
export {SharedService} from './shared/shared.service';


