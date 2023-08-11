import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormdemoComponent } from './formdemo/formdemo.component';
import { ChildcomponetmethodComponent } from './childcomponetmethod/childcomponetmethod.component';
import { HeaderComponent } from './header/header.component';
import { LoopmethodComponent } from './loopmethod/loopmethod.component';
import { MaketodolistComponent } from './maketodolist/maketodolist.component';
import { NestedloopMethodComponent } from './nestedloop-method/nestedloop-method.component';
import { SwitchmethodComponent } from './switchmethod/switchmethod.component';
import { ToggleElementComponent } from './toggle-element/toggle-element.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { PipeMethodComponent } from './pipe-method/pipe-method.component';
import { EmployeeListfromComponent } from './employee-listfrom/employee-listfrom.component';
import { AddModalListTableComponent } from './add-modal-list-table/add-modal-list-table.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { FormDeatilsListComponent } from './reactiveforms/form-deatils-list/form-deatils-list.component';
import { DataBindingEventsHandlingComponent } from './DataBindingEventsHandling/DataBindingEventsHandling.component';
import { DirectiveComponent } from './directive/directive.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { ServiceDemoComponent } from './services/service-demo/service-demo.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormSetupComponent } from './reactive-form-setup/reactive-form-setup.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { GridViewHightComponent } from './grid-view-hight/grid-view-hight.component';
import { OfficePunchDataComponent } from './office-punch-data/office-punch-data.component';
import { ProfileEntryFormComponent } from './Profile_List_Demo/profile-entry-form/profile-entry-form.component';
import { AllProflieDataListComponent } from './Profile_List_Demo/all-proflie-data-list/all-proflie-data-list.component';

const routes: Routes = [
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'profile-entry-form',
    component: ProfileEntryFormComponent,
  },
  {
    path: 'all-proflie-data-list',
    component: AllProflieDataListComponent,
  },
  {
    path: 'template-driven-form',
    component: TemplateDrivenFormComponent,
  },
  {
    path: 'reactive-form-setup',
    component: ReactiveFormSetupComponent,
  },
  {
    path: 'office-punch-data',
    component: OfficePunchDataComponent,
  },
  {
    path: 'to-do-list',
    component: ToDoListComponent,
  },
  {
    path: 'DataBindingEventsHandling',
    component: DataBindingEventsHandlingComponent,
  },
  {
    path: 'directive',
    component: DirectiveComponent,
  },
  {
    path: 'directive-demo',
    component: DirectiveDemoComponent,
  },
  {
    path: 'reactiveforms',
    component: ReactiveformsComponent
  },
  {
    path: 'service-demo',
    component: ServiceDemoComponent
  },
    // {
    //   path: 'reactiveforms',
    //   component: ReactiveformsComponent
    // },
  {
    path: 'form-deatils-list',
    component: FormDeatilsListComponent
  },
  {
    path: 'add-modal-list-table',
    component: AddModalListTableComponent
  },
  {
    path: 'employee-listfrom',
    component: EmployeeListfromComponent
  },
  {
    path: 'pipe-method',
    component: PipeMethodComponent
  },
  {
    path: 'childcomponetmethod',
    component: ChildcomponetmethodComponent
  },
  {
    path: 'Formdemo',
    component: FormdemoComponent
  },

  {
    path: 'loopmethod',
    component: LoopmethodComponent
  },
  {
    path: 'maketodolist',
    component: MaketodolistComponent
  },
  {
    path: 'nestedloop-method',
    component: NestedloopMethodComponent
  },
  {
    path: 'switchmethod',
    component: SwitchmethodComponent
  },
  {
    path: 'toggle-element',
    component: ToggleElementComponent
  },
  {
    path: 'twowaybinding',
    component: TwowaybindingComponent
  },
  {
    path: 'grid-view-hight',
    component: GridViewHightComponent
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
