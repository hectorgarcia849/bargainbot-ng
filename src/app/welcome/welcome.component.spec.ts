import {ComponentFixture, TestBed} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import {WelcomeComponent} from './welcome.component';
import {AppModule} from '../app.module';

describe('WelcomeComponent', () => {

  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule.withRoutes([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomeComponent);

  });

  it('should navigate from welcome to home', () => {
    const component = fixture.componentInstance;
    const navigateSpy = spyOn((<any>component).router, 'navigate');

    component.onEnter();
    expect(navigateSpy).toHaveBeenCalledWith(['home']);
  });
});












// import {async, ComponentFixture, fakeAsync, getTestBed, TestBed, tick} from '@angular/core/testing';
// import { WelcomeComponent } from './welcome.component';
// import {Router} from '@angular/router';
// import {AppComponent} from '../app.component';
// import {testModuleConfig} from '../testhelpers/test-shared.module';
// import {TestBootstrapComponent} from '../testhelpers/test-bootstrap.component';
//
//
// // Integration Testing
// describe('WelcomeComponent routing_component_tests', () => {
//   let welcomeComponent: WelcomeComponent;
//   let welcomeFixture: ComponentFixture<WelcomeComponent>;
//   // let appComponent: AppComponent;
//   // let appFixture: ComponentFixture<AppComponent>;
//   // let router: Router;
//   // let location: Location;
//
//
//   beforeEach(async(() => {
//     testModuleConfig();
//     TestBed.configureTestingModule({
//       declarations: [ WelcomeComponent, AppComponent ], // include AppComponent as contains the router-outlet
//       imports: []
//     })
//     .compileComponents();
//   }));
//
//   beforeEach(() => {
//     // location = TestBed.get(Location);
//     // router = TestBed.get(Router);
//     welcomeFixture = TestBed.createComponent(WelcomeComponent);
//     welcomeComponent = welcomeFixture.componentInstance;
//     // appFixture = TestBed.createComponent(AppComponent);
//     // appComponent = appFixture.componentInstance;
//     // router.initialNavigation();
//     welcomeFixture.detectChanges();
//     // appFixture.detectChanges();
//   });
//
//   it('should redirect you to /welcome when navigates to "" ', fakeAsync(() => {
//     const injector = getTestBed();
//     const router = injector.get(Router);
//
//     const fixture = TestBed.createComponent(TestBootstrapComponent);
//     fixture.detectChanges();
//     router.navigate(['/'])
//       .then(() => {
//         expect(router.url).toEqual('/welcome');
//       });
//   }));
//
//     // router.navigate(['']);
//     // tick();
//     // expect(location.path()).toBe('/welcome');
//
//   it('should navigate to home page', () => {
//     const injector = getTestBed();
//     const router = injector.get(Router);
//     welcomeComponent.onEnter().then(() => {
//       expect(router.url).toBe('/home');
//     });
//     welcomeFixture.detectChanges();
//   });
//
// });
