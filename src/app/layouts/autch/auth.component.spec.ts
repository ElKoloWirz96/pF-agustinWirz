import { TestBed } from "@angular/core/testing"
import { AutchComponent } from "./autch.component"
import { SharedModule } from "../../shared/shared.module";
import { AuthService } from "../../core/service/auth.service";

describe('autchComponent', () => {

    let component: AutchComponent;
    let authService: AuthService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AutchComponent
              ],
              imports: [
                SharedModule
              ]
        })

        component = TestBed.createComponent(AutchComponent).componentInstance;
        authService = TestBed.inject(AuthService);
    });

    it('El campo Email debe ser requerido', () => {
        const control = component.loginForm.get('email');
        control?.setValue('');

        expect(control?.hasError('required')).toBe(true);
    });

    it('El campo password debe ser requerido', () => {
        const control = component.loginForm.get('password');
        control?.setValue('');

        expect(control?.hasError('required')).toBe(true);
    });

    it('Debe llamar al markAllAsTouched de loginForm al llamar login, si el formulario es invalido', () => {
        component.loginForm.setValue({
            email: '',
            password: '',
        });

        expect(component.loginForm.invalid).toBeTrue();

        const spyOnmarkAllAsTouched = spyOn(component.loginForm, 'markAllAsTouched');

        component.login({ email: '', password: '' });

        expect(spyOnmarkAllAsTouched).toHaveBeenCalled();
    });

    it('Debe llamar al authService.login si el formulario es valido al llamar login', () => {

        component.loginForm.setValue({
            email: 'agustin-96@live.com.ar',
            password: 'agustinelguitaje',
        });

        expect(component.loginForm.valid).toBeTrue();

        const spyOnLogin = spyOn(authService, 'login');

        component.login({ email: 'agustin-96@live.com.ar', password: 'agustinelguitaje' });

        expect(spyOnLogin).toHaveBeenCalled();

    });
})